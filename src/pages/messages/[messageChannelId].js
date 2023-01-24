import SearchBarInbox from "@/components/search-bar-inbox";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Inbox.module.css";
import { useCallback, useState, useEffect } from "react";

import QuickInbox from "./quick-inbox";
import SearchBarHome from "@/components/search-bar-home";
import { InboxHeader } from "@/components/inbox-header";
import InboxContents from "@/components/inbox-content";

const MessageChannel = () => {
  const router = useRouter();

  useEffect(() => {}, [
    router.query.id,
    router.query.subject,
    router.query.firstParticipantName,
    router.query.secondParticipantName,
    router.query.firstConversation,
  ]);

  return (
    <>
      <div className="grid grid-cols-10 bg-[#262626] h-screen">
        <div className="col-span-2  border-r-[1px] border-white"></div>
        <div className="col-span-8">
          <SearchBarHome />
          <div className="fixed z-90 bottom-28 right-12 flex flex-col bg-white text-white text-base w-[650px] h-[600px] min-h-max rounded-lg overflow-auto border">
            {/* Chat Room Header */}
            <InboxHeader subjectData={router.query.subject} />
            <div className="overflow-auto">
              {/* Chat Room Content */}
              <InboxContents
                firstParticipantNames={router.query.firstParticipantName}
                secondParticipantNames={router.query.secondParticipantName}
                firstConversationText={router.query.firstConversation}
                secondConversationText={router.query.secondConversation}
              />
            </div>
            <div>
              <button
                title="Contact Sale"
                className="fixed z-30 bottom-10 right-8 bg-[#ffffff] w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-200 hover:drop-shadow-2xl">
                <Image
                  src="/icons/chat-blue-icon.svg"
                  alt="people"
                  width={28}
                  height={28}
                />
              </button>
              <Link href="/">
                <button
                  title="Contact Sale"
                  className="fixed z-20 bottom-10 right-12 bg-gray-600 w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-500 hover:drop-shadow-2xl"
                />
              </Link>
              <button
                title="Contact Sale"
                className="fixed z-90 bottom-10 right-32 bg-[#ffffff] w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-amber-100 hover:drop-shadow-2xl">
                <Image
                  src="/icons/chrome-reader-orange-icon.svg"
                  alt="search"
                  width={28}
                  height={28}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MessageChannel;
