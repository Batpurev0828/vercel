"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/Card";
import products from "@/data/products.json";

const inter = Inter({
  subsets: ["latin"],
});

const COLLECTIONS = [
  { label: "All", value: null },
  { label: "Bag", value: "bag" },
  { label: "Clothing", value: "clothing" }, // maps to category "clothing"
  { label: "Hat", value: "hat" },
  { label: "Jacket", value: "jacket" },
  { label: "Shirt", value: "shirt" },
  { label: "Utility", value: "utility" },
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState(null); // null = all
  const [sortDirection, setSortDirection] = useState(null); // 'asc' | 'desc' | null

  // parse price safely
  function priceOf(p) {
    const n = parseFloat(p?.price ?? "0");
    return Number.isFinite(n) ? n : 0;
  }

  const filteredAndSorted = useMemo(() => {
    // Filter
    let out = products.filter((prod) => {
      if (!selectedCategory) return true;
      // some categories in data use "clothing" vs UI label; we normalized values
      return prod.category === selectedCategory;
    });

    // Sort
    if (sortDirection === "asc") {
      out = out.slice().sort((a, b) => priceOf(a) - priceOf(b));
    } else if (sortDirection === "desc") {
      out = out.slice().sort((a, b) => priceOf(b) - priceOf(a));
    }

    return out;
  }, [selectedCategory, sortDirection]);

  const handleCategoryClick = (value) => {
    setSelectedCategory(value);
  };

  const handleSort = (dir) => {
    // clicking same direction again toggles off
    setSortDirection((prev) => (prev === dir ? null : dir));
  };

  return (
    <div
      className={`w-screen h-fit min-h-screen flex flex-col items-center py-4 px-6 bg-[#fafafa] ${inter.className}`}
    >
      <Header />
      <div className="w-full h-fit px-40 flex">
        {/* Left: Collections */}
        <div className="w-[10%] flex flex-col items-start space-y-2 text-sm ">
          <span className="text-xs text-[#737373]">Collections</span>
          {COLLECTIONS.map((c) => {
            const active = c.value === selectedCategory;
            return (
              <button
                key={c.label}
                onClick={() => handleCategoryClick(c.value)}
                className={`cursor-pointer px-2 py-1 rounded ${
                  active ? "font-medium text-black" : "text-[#4b4b4b]"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Center: Product grid */}
        <div className="w-[75%]  grid grid-cols-3 gap-4">
          {filteredAndSorted.map((product) => {
            const firstPic = product.pictures
              ? product.pictures[0]
              : product.colors?.[0]?.pictures?.[0];
            return (
              <ProductCard
                key={product.name}
                pic={firstPic}
                title={product.title}
                price={product.price}
                name={product.name}
              />
            );
          })}
        </div>

        {/* Right: Sort */}
        <div className="w-[15%] flex flex-col items-end space-y-2 text-sm">
          <span className="text-xs text-[#737373]">Sort by</span>
          <button
            onClick={() => handleSort("asc")}
            className={`cursor-pointer px-2 py-1 rounded ${
              sortDirection === "asc"
                ? "font-medium text-black"
                : "text-[#4b4b4b]"
            }`}
          >
            Price: Lowest to Highest
          </button>
          <button
            onClick={() => handleSort("desc")}
            className={`cursor-pointer px-2 py-1 rounded ${
              sortDirection === "desc"
                ? "font-medium text-black"
                : "text-[#4b4b4b]"
            }`}
          >
            Price: Highest to Lowest
          </button>
        </div>
      </div>
    </div>
  );
}
