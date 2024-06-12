"use client";
import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import { pricing } from "@/data/index";


export function BackgroundGradientDemo() {
  return (
    <div className="py-20" id="pricing">
      <div className="grid flex-wrap items-center justify-center gap-7 mb-20 grid-flow-col auto-cols-3">
      {pricing.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
      <BackgroundGradient className="rounded-[22px] max-w-sm sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={item.img}
          alt={item.title}
          height="400"
          width="400"
          className="object-contain"
        />
        <h1 className="text-purple font-bold justify-center lg:text-1xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm justify-center"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

        <button className="rounded-full pl-3 pr-2 py-3 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {item.price}
          </span>
        </button>
      </BackgroundGradient>
      </div>
  ))}
    </div>
    </div>
  );
}
