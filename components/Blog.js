import userData from "@constants/data";
import React from "react";

export default function Blog() {
  return (
    <section className="max-w-5xl  mx-auto px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-4xl md:text-6xl font-bold py-20 text-center md:text-left">
          Blog
        </h1>
      </div>
      <div className="bg-[#ebebeb] dark:bg-gray-900">
        <div className="text-lg text-gray-500 mt-4 dark:text-gray-300">
        In the near future I will start writing about all.
        </div>
      </div>
    </section>
  );
}
