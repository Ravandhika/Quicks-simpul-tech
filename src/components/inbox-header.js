import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Inbox.module.css";

export const InboxHeader = forwardRef((props, ref) => {
  const { subjectData, participant } = props;

  return (
    <>
      <div className="flex justify-between justify-items-start py-6 px-8  space-x-4 border-b-[1px] border-[#BDBDBD] ">
        <div className="flex items-center justify-start">
          <Link href="/message">
            <button>
              <Image
                src="/icons/arrow-left-black-icon.svg"
                alt="people"
                width={16}
                height={16}
              />
            </button>
          </Link>
        </div>
        <div className="flex flex-col ">
          <h1 className={styles.subjectFont}>{subjectData}</h1>
          <h2 className={styles.participantFont}>3 Participant</h2>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Link href="/">
            <button>
              <Image
                src="/icons/close-black-icon.svg"
                alt="people"
                width={16}
                height={16}
              />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
});
export default InboxHeader;
