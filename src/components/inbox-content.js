import { forwardRef, useState, useRef, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Inbox.module.css";
import moment from "moment/moment";
import { Menu, Transition } from "@headlessui/react";

export const InboxContents = (props) => {
  const {
    firstParticipantNames,
    secondParticipantNames,
    firstConversationText,
    secondConversationText,
  } = props;
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState([]);
  const messageEndRef = useRef(null);
  const [loadingStates, setLoadingStates] = useState({
    updateMessage: false,
    showMoreMenu: false,
    newMessage: true,
    connecting: true,
  });

  const handleChangeInput = (e) => {
    setInputMessage(e.target.value);
  };

  const submitMessage = () => {
    setMessages((prevState) => [...prevState, inputMessage]);
    setInputMessage("");
    setLoadingStates((prevObject) => {
      return {
        ...prevObject,
        connecting: !loadingStates.connecting,
      };
    });
    setTimeout(() => {
      setLoadingStates((prevObject) => {
        return {
          ...prevObject,
          connecting: true,
        };
      });
    }, 3000);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      submitMessage();
    }
  };

  const incomingMessage = () => {
    setTimeout(() => {
      // setUpdateMessage(true);
      setLoadingStates((prevObject) => {
        return {
          ...prevObject,
          updateMessage: true,
          newMessage: !loadingStates.newMessage,
        };
      });
    }, 3000);
  };
  const handleClickMore = () => {
    setLoadingStates((prevObject) => {
      return {
        ...prevObject,
        showMoreMenu: !loadingStates.showMoreMenu,
      };
    });
  };

  useEffect(() => {
    incomingMessage();
    console.log([messages]);
  }, [secondConversationText, loadingStates.updateMessage]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messages, loadingStates.updateMessage]);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [loadingStates.updateMessage]);

  return (
    <div className="">
      <div className=" py-[22px] px-8 space-y-8 ">
        <div className="flex flex-col items-end justify-end  h-auto ">
          <h1 className={styles.senderTextStyle}>you</h1>
          <div className="flex flex-row items-start space-x-2">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full  py-2 text-sm font-medium text-[#]  rounded-md">
                  <Image
                    src="/icons/more-horizontal-gray-icon.svg"
                    alt="people"
                    width={20}
                    height={20}
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute z-20 right-1 w-24  origin-top-right bg-white rounded-md border border-[#828282]">
                  <div className="flex flex-col items-start justify-center">
                    <Menu.Item>
                      <button
                        className={
                          "block px-4 py-2 text-sm font-lato text-[#2F80ED] hover:text-[#295792] border-b border-[#BDBDBD] w-full "
                        }>
                        Edit
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className={
                          "block px-4 py-2 text-sm font-lato text-[#EB5757] hover:text-[#884949] border-[#BDBDBD w-full"
                        }>
                        Delete
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="flex flex-col bg-[#EEDCFF] p-4 rounded-lg max-w-sm ">
              <h1 className={styles.conversationText}>
                So I started to walk into the water. I won't lie to you boys,
              </h1>
              <h1 className={styles.conversationTime}>
                {moment().subtract(5, "hours").format("HH:mm")}
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full border-b-[1.7px] h-[1vw] border-[#4F4F4F] text-center">
          <span className="font-lato font-bold text-[#4F4F4F] bg-white px-2">
            {moment().format("[Today ]LL")}
          </span>
        </div>
        <div className="flex flex-col items-start justify-start  h-auto ">
          <h1 className={styles.subjectFont}>{firstParticipantNames}</h1>
          <div className="flex flex-row items-start space-x-2">
            <div className="flex flex-col bg-[#FCEED3] p-4 rounded-lg max-w-sm ">
              <h1 className={styles.conversationText}>
                {firstConversationText}
              </h1>
              <h1 className={styles.conversationTime}>
                {moment().subtract(4, "hours").format("HH:mm")}
              </h1>
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full  py-2 text-sm font-medium text-[#]  rounded-md">
                  <Image
                    src="/icons/more-horizontal-gray-icon.svg"
                    alt="people"
                    width={20}
                    height={20}
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute z-20 -right-20 w-24  origin-top-right bg-white rounded-md border border-[#828282]">
                  <div className="flex flex-col items-start justify-center">
                    <Menu.Item>
                      <button
                        className={
                          "block px-4 py-2 text-sm font-lato text-[#2F80ED] hover:text-[#295792] border-b border-[#BDBDBD] w-full "
                        }>
                        Edit
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className={
                          "block px-4 py-2 text-sm font-lato text-[#EB5757] hover:text-[#884949] border-[#BDBDBD w-full"
                        }>
                        Delete
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        {loadingStates.updateMessage ? (
          <>
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
                  <h1 className={styles.conversationTime}>
                    {moment().format("HH:mm")}
                  </h1>
                </div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full  py-2 text-sm font-medium text-[#]  rounded-md">
                      <Image
                        src="/icons/more-horizontal-gray-icon.svg"
                        alt="people"
                        width={20}
                        height={20}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute z-20 -right-20 w-24  origin-top-right bg-white rounded-md border border-[#828282]">
                      <div className="flex flex-col items-start justify-center">
                        <Menu.Item>
                          <button
                            className={
                              "block px-4 py-2 text-sm font-lato text-[#2F80ED] hover:text-[#295792] border-b border-[#BDBDBD] w-full "
                            }>
                            Edit
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button
                            className={
                              "block px-4 py-2 text-sm font-lato text-[#EB5757] hover:text-[#884949] border-[#BDBDBD w-full"
                            }>
                            Delete
                          </button>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {messages.map((message, id) => {
          return (
            <>
              <div
                key={id}
                className="flex flex-col items-end justify-end  h-auto ">
                <h1 className={styles.senderTextStyle}>you</h1>

                <div className="flex flex-row items-start space-x-2">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full  py-2 text-sm font-medium text-[#]  rounded-md">
                        <Image
                          src="/icons/more-horizontal-gray-icon.svg"
                          alt="people"
                          width={20}
                          height={20}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute z-20 right-1 w-24  origin-top-right bg-white rounded-md border border-[#828282]">
                        <div className="flex flex-col items-start justify-center">
                          <Menu.Item>
                            <button
                              className={
                                "block px-4 py-2 text-sm font-lato text-[#2F80ED] hover:text-[#295792] border-b border-[#BDBDBD] w-full "
                              }>
                              Edit
                            </button>
                          </Menu.Item>
                          <Menu.Item>
                            <button
                              className={
                                "block px-4 py-2 text-sm font-lato text-[#EB5757] hover:text-[#884949] border-[#BDBDBD w-full"
                              }>
                              Delete
                            </button>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <div className="flex flex-col bg-[#EEDCFF] p-4 rounded-lg max-w-sm ">
                    <h1 className={styles.conversationText}>{message}</h1>
                    <h1 className={styles.conversationTime}>
                      {moment().subtract(2, "hours").format("HH:mm")}
                    </h1>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div ref={messageEndRef} />
      </div>
      <div className="flex h-24">
        {/* {!loadingStates.newMessage ? (
          <div className="flex flex-row absolute p-2 z-20 bottom-24 right-[290px]  bg-[#E9F3FF] rounded-lg w-auto">
            <h1 className={styles.subjectFont}>New Message</h1>
          </div>
        ) : (
          <></>
        )} */}

        <div className="flex flex-1 flex-row absolute bottom-0 w-full pb-[22px] px-8 space-x-4 bg-white ">
          <div className="flex flex-col w-screen space-y-2">
            <div className="flex flex-col justify-center items-center space-y-2">
              {!loadingStates.newMessage ? (
                <div className="w-32 text-[#4F4F4F] font-lato  py-2 px-2 rounded-lg bg-[#E9F3FF]">
                  <h1 className={styles.subjectFont}>New Message</h1>
                </div>
              ) : (
                <></>
              )}
              {!loadingStates.connecting ? (
                <div className="flex flex-1 w-full flex-row items-center bg-[#E9F3FF] py-2 px-2 rounded-lg">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-300 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <h1 className="w-full text-[#4F4F4F] font-lato text-sm   ">
                    Please wait while we connect you with one of our team ...
                  </h1>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-row space-x-4  z-20">
              <input
                className="w-full  text-[#4F4F4F] leading-tight focus:outline-none font-lato py-4 px-2 border-[#828282] border-2 rounded-lg"
                id="search"
                type="text"
                value={inputMessage}
                onChange={handleChangeInput}
                placeholder="Type a new message"
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={submitMessage}
                type="submit"
                className="flex bg-[#2F80ED] py-4 px-6 items-center justify-center rounded-lg">
                <h1>Send</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InboxContents;
