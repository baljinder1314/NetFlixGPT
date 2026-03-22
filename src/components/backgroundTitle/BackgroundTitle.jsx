import React from 'react';

function BackgroundTitle({ original_title, overview }) {
  return (
    <div className="flex flex-col gap-3  pt-70 pl-30 bg-black/30 h-222 relative z-10">
      <p className="text-6xl text-white font-bold">{original_title} </p>
      <p className="font-semibold text-white text-base w-4/12 py-2">
        {overview}
      </p>
      <div className="flex gap-3">
        <button className="text-xl py-1  px-8 font-semibold capitalize border-none rounded-3xl bg-white text-black hover:opacity-80">
          play
        </button>
        <button className="text-xl py-1  px-8 font-semibold capitalize  rounded-3xl bg-gray-500/50 border  border-white text-white hover:opacity-80">
          more ifno
        </button>
      </div>
    </div>
  );
}

export default BackgroundTitle;
