import { useCallback, useState, useEffect, forwardRef } from "react";
import Image from "next/image";

export const QuickTask = forwardRef((props, ref) => {
  const { handleActivatedHome, handleActivatedInbox, handleActivatedTask } =
    props;
  return (
    <>
      <button
        onClick={handleActivatedTask}
        title="Contact Sale"
        className="fixed z-30 bottom-10 right-8 bg-[#ffffff] w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-amber-100 hover:drop-shadow-2xl">
        <Image
          src="/icons/chrome-reader-orange-icon.svg"
          alt="search"
          width={28}
          height={28}
        />
      </button>
      <button
        onClick={handleActivatedHome}
        title="Contact Sale"
        className="fixed z-20 bottom-10 right-12 bg-gray-600 w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-500 hover:drop-shadow-2xl"></button>
      <button
        onClick={handleActivatedInbox}
        title="Contact Sale"
        className="fixed z-90 bottom-10 right-32 bg-[#ffffff] w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-200 hover:drop-shadow-2xl">
        <Image
          src="/icons/chat-blue-icon.svg"
          alt="search"
          width={28}
          height={28}
        />
      </button>
    </>
  );
});
export default QuickTask;
