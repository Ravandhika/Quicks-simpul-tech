import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Inbox.module.css";

export const InboxContents = forwardRef((props, ref) => {
  const { dummy } = props;

  return (
    <>
      <div className="flex h-20">
        <div className="flex flex-1 flex-row absolute bottom-0 w-full pb-[22px] px-8 space-x-4 bg-white">
          <div className="flex flex-col w-screen">
            <input
              className="w-full bg-white text-[#4F4F4F] leading-tight focus:outline-none  py-4 px-2 border-[#828282] border-2 rounded-lg"
              id="search"
              type="text"
              placeholder="Search"
            />
          </div>
          <button className="flex bg-[#2F80ED] py-4 px-6 items-center justify-center rounded-lg">
            <h1>Send</h1>
          </button>
        </div>
      </div>
    </>
  );
});
export default InboxContents;
