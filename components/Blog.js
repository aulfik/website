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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ipsum nibh. Nullam tempus, sem quis blandit sollicitudin, nisl eros sollicitudin ligula, id maximus leo libero id justo. Vivamus tincidunt, lacus at porta laoreet, risus magna dictum tortor, eget interdum lectus diam tincidunt metus. Nam at libero libero. Sed tincidunt elit id sagittis auctor. Cras justo felis, accumsan in blandit eu, lacinia id dolor. Fusce non tellus sapien. In viverra commodo porttitor.
        </div>
      </div>
    </section>
  );
}
