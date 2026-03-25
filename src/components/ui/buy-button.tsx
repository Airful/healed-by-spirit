"use client";

import { useState } from "react";

export function BuyButton({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const { url, error } = await res.json();
      if (url) {
        window.location.href = url;
      } else {
        alert(error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="px-4 py-2 bg-green text-white text-xs font-semibold rounded-full hover:bg-green-dark active:scale-[0.98] transition-all duration-200 disabled:opacity-60"
    >
      {loading ? "Loading…" : "Buy Now"}
    </button>
  );
}
