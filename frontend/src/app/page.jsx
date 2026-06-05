"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Input } from "antd";

const { Search } = Input;

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen text-left text-[#303d46]">
      <div className="w-[30%] left-slide">
        <h1 className="text-5xl font-bold mt-10">Explore Dog Breeds</h1>
        <h3 className="text-xl mt-2">
          Search and list over a hundred dog breeds with ease.
        </h3>
        <div className="flex mt-2 w-full">
          <input
            className="border-4 border-[#303d46] rounded-l-[20px] p-2 w-full focus:outline-none"
            placeholder="Search dog breeds..."
          />
          <button className="bg-[#303d46] text-white px-4 rounded-r-[20px]">
            Search
          </button>
        </div>
      </div>

      <img
        src="./IMG/feeb756c-a9ac-4e09-98f4-f3fe60af24cf.png"
        className="h-100 w-70 animate-bounceScale"
        alt="CanisInfo"
      />
    </div>
  );
}
