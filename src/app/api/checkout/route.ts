import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/data/products";

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    const product = products.find((p) => p.slug === slug);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const origin = request.headers.get("origin") || "https://healed-by-spirit.vercel.app";

    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("line_items[0][price_data][currency]", "usd");
    params.append("line_items[0][price_data][unit_amount]", String(product.price * 100));
    params.append("line_items[0][price_data][product_data][name]", product.name);
    params.append("line_items[0][price_data][product_data][description]", product.description);
    params.append("line_items[0][quantity]", "1");
    params.append("success_url", `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`);
    params.append("cancel_url", `${origin}/shop`);

    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const session = await res.json();

    if (!res.ok) {
      console.error("Stripe error:", session.error);
      return NextResponse.json(
        { error: session.error?.message || "Payment failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
