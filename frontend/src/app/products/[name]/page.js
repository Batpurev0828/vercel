"use client";

import React, { useState, useEffect, useMemo, use } from "react";
import products from "@/data/products.json";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Page({ params }) {
  const productName = use(params)?.name ?? "";

  const product = products.find((p) => p.name === productName);

  const initCol = product?.colors?.[0]?.name ?? null;
  const initSz = product?.sizes?.[0] ?? null;

  const [currCol, setCurrCol] = useState(initCol);
  const [currSize, setCurrSize] = useState(initSz);
  const [currImgIdx, setCurrImgIdx] = useState(0);

  const images = useMemo(() => {
    if (!product) return [];
    if (product.colors?.length) {
      const col =
        product.colors.find((c) => c.name === currCol) ?? product.colors[0];
      return col.pictures ?? [];
    }
    return product.pictures ?? [];
  }, [product, currCol]);

  useEffect(() => {
    setCurrImgIdx(0);
  }, [productName, product, currCol]);

  useEffect(() => {
    if (!product) return;
    setCurrCol((prev) => prev ?? product.colors?.[0]?.name ?? null);
    setCurrSize((prev) => prev ?? product.sizes?.[0] ?? null);
  }, [product]);

  if (!product) {
    return <h1>Could not find a product</h1>;
  }

  const prevImage = () => {
    if (!images.length) return;
    setCurrImgIdx((i) => (i - 1 + images.length) % images.length);
  };
  const nextImage = () => {
    if (!images.length) return;
    setCurrImgIdx((i) => (i + 1) % images.length);
  };

  return (
    <div
      className={`w-screen h-fit min-h-screen flex flex-col items-center py-4 px-6 text-black bg-[#fafafa] ${inter.className}`}
    >
      <Header />
      <div className="flex bg-white w-full max-w-screen-2xl rounded-xl border border-[#ececec] max-h-[calc(100vh-200px)] h-[960px] p-8 gap-8">
        <div className="flex basis-4/6 h-full items-center justify-center flex-col relative">
          <div className="w-full h-full max-h-[70vh] flex items-center justify-center relative">
            {images.length ? (
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={images[currImgIdx]}
                  alt={`${product.title} - ${currCol ?? "default"} - ${
                    currImgIdx + 1
                  }`}
                  className="max-h-[70vh] max-w-full object-contain rounded-md"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No images available
              </div>
            )}

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white px-3 py-2 rounded-full border border-gray-200"
                >
                  ‹
                </button>

                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white px-3 py-2 rounded-full border border-gray-200"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="w-full mt-4 flex gap-2 overflow-x-auto absolute bottom-0 left-[31%] px-2">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setCurrImgIdx(i)}
                  className={`flex-none w-20 h-20 rounded-md overflow-hidden border ${
                    i === currImgIdx ? "border-blue-600" : "border-gray-200"
                  } shrink-0`}
                >
                  <img
                    src={src}
                    alt={`thumb-${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex basis-2/6 flex-col">
          <div className="w-full pb-6 mb-6 border-b border-b-[#ececec]">
            <h1 className="text-5xl font-medium mb-4">{product.title}</h1>
            <div className="bg-blue-600 p-2 rounded-full text-white text-sm w-fit tracking-wide">
              {`$${product.price} USD`}
            </div>
          </div>

          {product.colors?.length ? (
            <form
              className="w-full flex flex-col tracking-wide mb-6"
              aria-labelledby="color-heading"
            >
              <h2 id="color-heading" className="text-sm mb-4">
                COLOR
              </h2>
              <fieldset
                className="flex space-x-2"
                role="radiogroup"
                aria-label="Color options"
              >
                {product.colors.map((color, i) => {
                  const id = `color-${product.name}-${i}`;
                  return (
                    <div key={id} className="inline-block">
                      <input
                        id={id}
                        type="radio"
                        name={`color-${productName}`}
                        value={color.name}
                        checked={currCol === color.name}
                        onChange={() => setCurrCol(color.name)}
                        className="peer sr-only"
                        aria-checked={currCol === color.name}
                      />
                      <label
                        htmlFor={id}
                        className={`px-4 py-2 rounded-full border border-gray-300 text-sm capitalize
                          ${
                            currCol === color.name
                              ? "bg-blue-600 text-white border-blue-600"
                              : "hover:bg-gray-100"
                          } transition-colors inline-block cursor-pointer`}
                      >
                        {color.name}
                      </label>
                    </div>
                  );
                })}
              </fieldset>
            </form>
          ) : null}

          {product.sizes?.length ? (
            <form
              className="w-full flex flex-col tracking-wide mb-6"
              aria-labelledby="size-heading"
            >
              <h2 id="size-heading" className="text-sm mb-4">
                SIZE
              </h2>
              <fieldset
                className="flex space-x-2"
                role="radiogroup"
                aria-label="Size options"
              >
                {product.sizes.map((size, i) => {
                  const id = `size-${product.name}-${i}`;
                  return (
                    <div key={id} className="inline-block">
                      <input
                        id={id}
                        type="radio"
                        name={`size-${productName}`}
                        value={size}
                        checked={currSize === size}
                        onChange={() => setCurrSize(size)}
                        className="peer sr-only"
                        aria-checked={currSize === size}
                      />
                      <label
                        htmlFor={id}
                        className={`px-4 py-2 rounded-full border border-gray-300 text-sm capitalize
                          ${
                            currSize === size
                              ? "bg-blue-600 text-white border-blue-600"
                              : "hover:bg-gray-100"
                          } transition-colors inline-block cursor-pointer`}
                      >
                        {size}
                      </label>
                    </div>
                  );
                })}
              </fieldset>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
}
