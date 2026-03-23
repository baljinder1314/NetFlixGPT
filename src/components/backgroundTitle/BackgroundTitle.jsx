import React from 'react';

function BackgroundTitle({ original_title, overview }) {
  return (
    <div className="flex flex-col gap-2  bg-black/20 relative z-10 h-screen lg:px-20 lg:py-30  hidden md:block md:px-20 md:py-30">
      <p className="text-base sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight pt-20 md:text-[2rem]">
        {original_title}{' '}
      </p>
      <p className="font-semibold text-white text-xs sm:text-sm md:text-base w-full sm:w-4/5 md:w-2/4 lg:w-6/12 py-1 sm:py-2 md:py-3 ">
        {overview}
      </p>
      <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
        <button className="text-xs sm:text-sm md:text-lg lg:text-xl py-1 sm:py-2 px-4 sm:px-6 md:px-8 lg:px-10 font-semibold capitalize border-none rounded-lg sm:rounded-2xl md:rounded-3xl bg-white text-black hover:opacity-80 transition whitespace-nowrap">
          play
        </button>
        <button className="text-xs sm:text-sm md:text-lg lg:text-xl py-1 sm:py-2 px-4 sm:px-6 md:px-8 lg:px-10 font-semibold capitalize rounded-lg sm:rounded-2xl md:rounded-3xl bg-gray-500/50 border border-white text-white hover:opacity-80 transition whitespace-nowrap">
          more info
        </button>
      </div>
    </div>
  );
}

export default BackgroundTitle;
