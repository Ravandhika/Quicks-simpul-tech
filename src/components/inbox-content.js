import { forwardRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Inbox.module.css";

export const InboxContents = (props) => {
  const {
    firstParticipantNames,
    secondParticipantNames,
    firstConversationText,
    secondConversationText,
  } = props;
  const [message, setMessage] = useState("");

  const submitMessage = async () => {};
  return (
    <>
      <div className=" py-[22px] px-8 space-y-8 overflow-auto">
        <div className="flex flex-col items-end justify-end  h-auto ">
          <h1 className={styles.senderTextStyle}>you</h1>
          <div className="flex flex-row items-start space-x-2">
            <button>
              <Image
                src="/icons/more-horizontal-gray-icon.svg"
                alt="people"
                width={20}
                height={20}
              />
            </button>
            <div className="flex flex-col bg-[#EEDCFF] p-4 rounded-lg max-w-sm ">
              <h1 className={styles.conversationText}>
                So I started to walk into the water. I won't lie to you boys,
              </h1>
              <h1 className={styles.conversationTime}>19.32</h1>
            </div>
          </div>
        </div>
        <div className="w-full border-b-[1.7px] h-[1vw] border-[#4F4F4F] text-center">
          <span className="font-lato font-bold text-[#4F4F4F] bg-white px-2">
            Today June 09, 2021
          </span>
        </div>
        <div className="flex flex-col items-start justify-start  h-auto ">
          <h1 className={styles.subjectFont}>{firstParticipantNames}</h1>
          <div className="flex flex-row items-start space-x-2">
            <div className="flex flex-col bg-[#FCEED3] p-4 rounded-lg max-w-sm ">
              <h1 className={styles.conversationText}>
                {firstConversationText}
              </h1>
              <h1 className={styles.conversationTime}>19.32</h1>
            </div>
            <button>
              <Image
                src="/icons/more-horizontal-gray-icon.svg"
                alt="people"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div className="w-full border-b-[1.7px] h-[1vw] border-[#EB5757] text-center">
          <span className="font-lato font-bold text-[#EB5757] bg-white px-2">
            New Message
          </span>
        </div>
        <div className="flex flex-col items-start justify-start  h-auto ">
          <h1 className={styles.subjectFont}>{secondParticipantNames}</h1>
          <div className="flex flex-row items-start space-x-2">
            <div className="flex flex-col bg-[#D2F2EA] p-4 rounded-lg max-w-sm ">
              <h1 className={styles.conversationText}>
                {secondConversationText}
              </h1>
              <h1 className={styles.conversationTime}>19.32</h1>
            </div>
            <button>
              <Image
                src="/icons/more-horizontal-gray-icon.svg"
                alt="people"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-20">
        <div className="flex flex-1 flex-row absolute bottom-0 w-full pb-[22px] px-8 space-x-4 bg-white">
          <div className="flex flex-col w-screen">
            <input
              className="w-full bg-white text-[#4F4F4F] leading-tight focus:outline-none font-lato py-4 px-2 border-[#828282] border-2 rounded-lg"
              id="search"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a new message"
            />
          </div>
          <button
            onClick={submitMessage}
            className="flex bg-[#2F80ED] py-4 px-6 items-center justify-center rounded-lg">
            <h1>Send</h1>
          </button>
        </div>
      </div>
    </>
  );
};
export default InboxContents;
