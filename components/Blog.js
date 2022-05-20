import userData from "@constants/data";
import React from "react";

export default function Blog() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 h-200 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-2xl md:text-4xl font-bold py-10 px-5 text-center md:text-left">
          Blog
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#ebebeb] -mt-4 dark:bg-gray-900 p-4 md:p-10 lg:p-5 max-w-5xl mx-auto mb-20">
        <div className="text-lg text-gray-500 mt-4 dark:text-gray-300">
          Some code
        </div>
      </div>
    </section>
  );
}
