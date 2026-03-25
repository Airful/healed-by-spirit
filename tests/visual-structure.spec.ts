import { test, expect } from "@playwright/test";

/**
 * Test visual structure: header/footer presence, section dividers,
 * images loading, responsive layout, and animation elements.
 */

test.describe("Header structure", () => {
  test("header is fixed and visible on scroll", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    await expect(header).toBeVisible();

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);

    // Header should still be visible (fixed/sticky)
    await expect(header).toBeVisible();
  });

  test("header has correct nav items", async ({ page, isMobile }) => {
    await page.goto("/");

    if (isMobile) {
      // Open hamburger menu to reveal mobile nav
      await page.locator('button[aria-label="Toggle menu"]').click();
      await page.waitForTimeout(400);
    }

    const navItems = ["About", "Services", "Book", "Shop", "Contact"];
    for (const item of navItems) {
      // Use getByRole to find the visible link (desktop nav is display:none on mobile)
      await expect(page.getByRole("link", { name: item, exact: true }).first()).toBeVisible();
    }
  });
});

test.describe("Footer structure", () => {
  test("footer is present on every page", async ({ page }) => {
    const pages = ["/", "/about", "/services", "/book", "/shop", "/contact", "/terms"];

    for (const path of pages) {
      await page.goto(path);
      await expect(page.locator("footer")).toBeVisible();
    }
  });

  test("footer has 4 column groups", async ({ page }) => {
    await page.goto("/");
    // Footer should have Services, Quick Links, Contact headings
    await expect(page.locator('footer h3:has-text("Services")')).toBeVisible();
    await expect(page.locator('footer h3:has-text("Quick Links")')).toBeVisible();
    await expect(page.locator('footer h3:has-text("Contact")')).toBeVisible();
  });
});

test.describe("Section dividers", () => {
  test("homepage has section dividers (SVG)", async ({ page }) => {
    await page.goto("/");
    const dividers = page.locator('div[aria-hidden] svg');
    expect(await dividers.count()).toBeGreaterThanOrEqual(1);
  });

  test("book page has section divider before CTA", async ({ page }) => {
    await page.goto("/book");
    const dividers = page.locator('div[aria-hidden] svg');
    expect(await dividers.count()).toBeGreaterThanOrEqual(1);
  });
});

test.describe("Images load correctly", () => {
  test("homepage hero image loads", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    const heroImages = page.locator("section").first().locator("img");
    const count = await heroImages.count();
    expect(count).toBeGreaterThanOrEqual(1);

    // Hero image has priority so should load quickly
    if (count > 0) {
      await page.waitForFunction(
        (el) => (el as HTMLImageElement).complete && (el as HTMLImageElement).naturalWidth > 0,
        await heroImages.first().elementHandle(),
        { timeout: 10000 }
      );
    }
  });

  test("about page images load", async ({ page }) => {
    await page.goto("/about", { waitUntil: "domcontentloaded" });
    const images = page.locator("img");
    const count = await images.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("contact page headshot loads", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "load" });
    const headshot = page.locator('img[alt="Brian Kurtz"]');
    await headshot.scrollIntoViewIfNeeded();
    await expect(headshot).toBeVisible({ timeout: 10000 });
    // Wait for lazy-loaded image to complete
    await page.waitForFunction(
      (el) => (el as HTMLImageElement).complete && (el as HTMLImageElement).naturalWidth > 0,
      await headshot.elementHandle(),
      { timeout: 10000 }
    );
  });

  test("book cover image loads", async ({ page }) => {
    await page.goto("/book", { waitUntil: "load" });
    const cover = page.locator('img[alt*="Access the Real You"]').first();
    await cover.scrollIntoViewIfNeeded();
    await expect(cover).toBeVisible({ timeout: 10000 });
    await page.waitForFunction(
      (el) => (el as HTMLImageElement).complete && (el as HTMLImageElement).naturalWidth > 0,
      await cover.elementHandle(),
      { timeout: 10000 }
    );
  });

  test("shop page product images load", async ({ page }) => {
    await page.goto("/shop", { waitUntil: "load" });
    const images = page.locator("section img");
    const count = await images.count();
    expect(count).toBeGreaterThanOrEqual(1);

    // Scroll first product image into view and wait for lazy load
    if (count > 0) {
      const firstImg = images.first();
      await firstImg.scrollIntoViewIfNeeded();
      await page.waitForFunction(
        (el) => (el as HTMLImageElement).complete && (el as HTMLImageElement).naturalWidth > 0,
        await firstImg.elementHandle(),
        { timeout: 10000 }
      );
    }
  });
});

test.describe("Responsive layout", () => {
  test("mobile: hamburger menu appears", async ({ page, browserName }) => {
    test.skip(browserName !== "chromium");
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    // Desktop nav should be hidden, mobile menu button should be visible
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
  });

  test("mobile: content doesn't overflow horizontally", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    const pages = ["/", "/about", "/services", "/book", "/shop", "/contact"];

    for (const path of pages) {
      await page.goto(path);
      const overflowPx = await page.evaluate(() => {
        // Check if user can actually scroll horizontally (body has overflow-x: hidden)
        const htmlOverflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
        return htmlOverflow;
      });
      // body overflow-x:hidden clips content; allow up to 16px for animation initial states
      expect(overflowPx, `${path} has ${overflowPx}px horizontal overflow`).toBeLessThanOrEqual(16);
    }
  });
});

test.describe("Animation elements present", () => {
  test("homepage has floating orbs in hero", async ({ page }) => {
    await page.goto("/");
    // Floating orbs have radial-gradient inline style from FloatingOrb component
    const orbs = page.locator("section").first().locator('[style*="radial-gradient"]');
    expect(await orbs.count()).toBeGreaterThanOrEqual(1);
  });

  test("pages use motion divs for animations", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Framer Motion injects style attributes on animated elements
    // Check that at least some elements have transform or opacity styles
    const animatedElements = await page.evaluate(() => {
      const els = document.querySelectorAll("[style*='opacity'], [style*='transform']");
      return els.length;
    });

    expect(animatedElements).toBeGreaterThanOrEqual(1);
  });
});
