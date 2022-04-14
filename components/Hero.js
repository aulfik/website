import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="max-w-5xl mx-auto flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-w-5xl text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-4xl font-semibold text-gray-700 dark:text-gray-200 my-2">
              Data Scientist.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-2/4 flex">
          <img src={userData.avatarUrl} alt="avatar" className="" />
          <div className="flex flex-row justify-between mt-1">
            <div className="flex flex-row space-x-4">
              <p className="font-mono">Its's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
