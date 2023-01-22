import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import QuickInbox from "../pages/messages/quick-inbox";
import QuickHome from "./quick-home";
import QuickTask from "./quick-task";

export default function PopUpQuicks() {
  const [showButton, setShowButton] = useState(false);
  const [activatedButton, setActivatedButton] = useState(0);

  const changeActivatedHome = () => {
    setActivatedButton(0);
  };

  const changeActivatedInbox = () => {
    setActivatedButton(1);
  };
  const changeActivatedTask = () => {
    setActivatedButton(2);
  };

  const activatedType = () => {
    // if (activatedButton == 0) {
    //   return (
    //     <QuickHome
    //       handleActivatedInbox={changeActivatedInbox}
    //       handleActivatedTask={changeActivatedTask}
    //     />
    //   );
    // }
    // if (activatedButton == 1) {
    //   return (
    //     <QuickInbox
    //       handleActivatedHome={changeActivatedHome}
    //       handleActivatedInbox={changeActivatedInbox}
    //       handleActivatedTask={changeActivatedTask}
    //     />
    //   );
    // }
    // if (activatedButton == 2) {
    //   return (
    //     <QuickTask
    //       handleActivatedHome={changeActivatedHome}
    //       handleActivatedInbox={changeActivatedInbox}
    //       handleActivatedTask={changeActivatedTask}
    //     />
    //   );
    // }
  };
  const show = useCallback(() => {
    setShowButton(!showButton);
  }, [showButton]);

  return (
    <>
      <button
        onClick={show}
        title="Contact Sale"
        className="fixed z-90 bottom-10 right-8 bg-[#2F80ED] w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-600 hover:drop-shadow-2xl">
        <Image
          src="/icons/quicks-stroke-icon.svg"
          alt="search"
          width={16}
          height={16}
        />
      </button>
      {showButton ? (
        <QuickHome
          handleActivatedInbox={changeActivatedInbox}
          handleActivatedTask={changeActivatedTask}
        />
      ) : (
        <></>
      )}
    </>
  );
}
