import { useCallback, useState, useEffect, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const QuickHome = forwardRef((props, ref) => {
  const { handleActivatedInbox, handleActivatedTask } = props;
  return (
    <>
      <h1 className="fixed z-90 bottom-28 right-36  flex justify-center items-center text-white text-base  ">
        Inbox
      </h1>
      <Link href="/message">
        <button
          title="Contact Sale"
          className="fixed z-90 bottom-10 right-32 bg-[#ffffff] w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-200 hover:drop-shadow-2xl">
          <Image
            src="/icons/chat-blue-icon.svg"
            alt="search"
            width={28}
            height={28}
          />
        </button>
      </Link>

      <h1 className="fixed z-90 bottom-28 right-60  flex justify-center items-center text-white text-base  ">
        Task
      </h1>
      <Link href="/todo">
        <button
          title="Contact Sale"
          className="fixed z-90 bottom-10 right-56 right bg-[#ffffff] w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-amber-100 hover:drop-shadow-2xl">
          <Image
            src="/icons/chrome-reader-orange-icon.svg"
            alt="search"
            width={28}
            height={28}
          />
        </button>
      </Link>
    </>
  );
});
export default QuickHome;
