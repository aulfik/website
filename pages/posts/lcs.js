import React from "react";
import Posts from "@components/Posts";
import Head from "next/head";

export default function lcs() {
  const meta = {
    title: "Lcs License Generator",   
    description: `Lcs is a CLI application to easily creating/generating LICENSE text.`,
    type: "blog",
  };
  return (
    <Posts>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>

      <article className="max-w-5xl  mx-auto px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-2xl md:text-4xl font-bold py-20 text-center md:text-left">
          License Generator CLI Golang Project
        </h1>
      </div>
      <div className="bg-[#ebebeb] dark:bg-gray-900">
        <div className="text-lg text-gray-500 mt-4 dark:text-gray-300">
          <p className="mb-2">Lcs is a CLI application to easily creating/generating LICENSE text. 
            Lcs provide a simple interface similar to git & go tools. 
            This project is using Cobra and Survey.
          </p>
          <p className="mb-2">
            Lcs generate a LICENSE text based on Choose a License:
          </p>
          <ul className="mb-2">
            <li>MIT License</li>
            <li>GNU AGPLv3</li>
            <li>GNU GPLv3</li>
            <li>GNU LGPLv3</li>
            <li>Mozilla Public License 2.0</li>
            <li>Apache License 2.0</li>
            <li>Boost Software License 1.0</li>
            <li>The Unlicense</li>
          </ul>
          <h2>
            Run it on your machine
          </h2>
          <p>
            This tool requires you to install Go v1.16 or later. 
          </p>
          <p>
            For installation instructions, see Installing Go
          </p>
          <p>
            Author
          </p> 
          <p>
            Aulia Fikri
          </p>
          <p>
            License
          </p>
          <p>MIT</p>
        </div>
      </div>
    </article>
    </Posts>
  );
}
