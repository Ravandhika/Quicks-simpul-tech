import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import SearchBarInbox from "../../components/search-bar-inbox";
import axios from "axios";
import Link from "next/link";
import styles from "@/styles/Inbox.module.css";
import moment from "moment/moment";

export const QuickInbox = () => {
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const header = { "app-id": "63cc9675cdaa482288cd50da" };
  const messageAPI = "https://dummyapi.io/data/v1/post?limit=10";

  useEffect(() => {
    getMessage();
  }, []);

  const handleOnChangeSearch = (e) => {
    setSearchResult(e.target.value);
  };
  // const searchFilter = (array) => {
  //   return array.filter((el) => el.name.common.toLowerCase().includes(query));
  // };

  const getMessage = useCallback(() => {
    const headers_ = { headers: header };
    axios
      .get(messageAPI, headers_)
      .then((res) => {
        setMessageList(res.data.data);
        console.log(res.data.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, [messageList]);

  return (
    <>
      <div>
        <div className="fixed z-90 bottom-28 right-12 flex flex-col bg-white text-white text-base w-[650px] h-[600px] min-h-max py-6 px-8 mt-1 mb-1 rounded-lg overflow-y-auto ">
          <div>
            <SearchBarInbox
              handleOnChanges={handleOnChangeSearch}
              values={searchResult}
            />
          </div>
          <div>
            {!loading ? (
              <>
                <div className="bg-gray-200 w-full  flex justify-center items-center mt-[22.5vh] ">
                  <div className="flex flex-col w-full space-y-4 items-center justify-center bg-white">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
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
                      <span className="sr-only">Loading...</span>
                    </div>
                    <div>
                      <h1 className="text-[#4F4F4F]">Loading Chats ...</h1>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {messageList
                  .filter((messageData) => {
                    return searchResult.toLowerCase() === ""
                      ? messageData
                      : messageData.text.toLowerCase().includes(searchResult);
                  })
                  .map((messageData) => {
                    return (
                      <Link
                        className="flex flex-col border-t-[1px] border-[#828282] first:border-0"
                        key={messageData.id}
                        href={{
                          pathname: "/messages/" + messageData.id,
                          query: {
                            id: messageData.id,
                            subject: messageData.tags[2],
                            firstParticipantName: messageData.owner.lastName,
                            secondParticipantName: messageData.owner.firstName,
                            firstConversation: messageData.text,
                            secondConversation: messageData.tags[1],
                          },
                        }}>
                        <div className=" w-full">
                          <div className="grid grid-cols-12 py-[22px] ">
                            <div className="relative col-span-2 self-center">
                              {messageData.image ? (
                                <Image
                                  src={messageData.image}
                                  alt="search"
                                  width={28}
                                  height={28}
                                  className="rounded-full h-8 w-8 absolute left-4"
                                />
                              ) : (
                                <Image
                                  src="/icons/person-white-icon.svg"
                                  alt="search"
                                  width={28}
                                  height={28}
                                  className="bg-[#2F80ED] rounded-full h-8 w-8 p-2 absolute left-4"
                                />
                              )}
                              <Image
                                src="/icons/person-gray-icon.svg"
                                alt="search"
                                width={28}
                                height={28}
                                className="bg-[#E0E0E0] rounded-full h-8 w-8 p-2 "
                              />
                            </div>
                            <div className="col-span-4 w-full">
                              <h1 className="text-base font-lato font-bold text-[#2F80ED]">
                                {messageData.tags[2]}
                              </h1>
                              <h1 className="text-sm font-lato font-bold text-[#4F4F4F]">
                                {messageData.owner.lastName}
                              </h1>
                              <h1 className="text-sm font-lato text-[#4F4F4F] text-ellipsis">
                                {messageData.text}
                              </h1>
                            </div>
                            <div className="col-span-5 w-full">
                              <h1 className="text-base font-lato text-[#4F4F4F]">
                                {moment()
                                  .subtract(5, "hours")
                                  .format("MM/DD/YYYY HH:mm")}
                              </h1>
                            </div>
                            <div className="col-span-1 w-full self-center">
                              <Image
                                src="/icons/notification-red-icon.svg"
                                alt="search"
                                width={12}
                                height={12}
                                // className="bg-[#E0E0E0] rounded-full h-8 w-8 p-2 "
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
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
      <Link href="/todo">
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
      </Link>
    </>
  );
};
export default QuickInbox;
