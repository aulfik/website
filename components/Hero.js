import React from "react";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="max-w-5xl mx-auto flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      {/* Image container */}
      <div className="lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-1/3 md:w-1/2 flex">
          <img src={userData.avatarUrl} alt="avatar" className="" />
          <div className="flex flex-row justify-between mt-1">
            <div className="flex flex-row space-x-4">
              <p className="font-mono">It's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
