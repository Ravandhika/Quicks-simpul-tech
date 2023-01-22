import { useCallback, useState, useEffect, forwardRef } from "react";
import Image from "next/image";
import SearchBarInbox from "../../components/search-bar-inbox";
import LoadingSpinner from "../../components/loading-spinner";
import axios from "axios";
import Link from "next/link";
import styles from "@/styles/Inbox.module.css";

export const QuickInbox = forwardRef((props, ref) => {
  const { handleActivatedHome, handleActivatedInbox, handleActivatedTask } =
    props;
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);
  const header = { "app-id": "63cc9675cdaa482288cd50da" };
  const postAPI = "https://dummyapi.io/data/v1/post?limit=10";
  const getPost = useCallback(() => {
    const headers_ = { headers: header };
    axios
      .get(postAPI, headers_)
      .then((res) => {
        setPostList(res.data.data);
        setLoading(true);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [postList]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div>
        <div className="fixed z-90 bottom-28 right-12 flex flex-col bg-white text-white text-base w-[650px] h-[600px] min-h-max py-6 px-8 mt-1 mb-1 rounded-lg overflow-y-auto border ">
          <div>
            <SearchBarInbox />
          </div>
          <div>
            {!loading ? (
              <LoadingSpinner />
            ) : (
              <>
                {postList.map((postData) => {
                  return (
                    <Link
                      href={{
                        pathname: "/messages/" + postData.id,
                        query: {
                          id: postData.id,
                          subject: postData.tags[2],
                          firstParticipantName: postData.owner.lastName,
                          secondParticipantName: postData.owner.firstName,
                          firstConversation: postData.text,
                          secondConversation: postData.tags[1],
                        },
                      }}>
                      <div className=" w-full border-b-[1px] border-[#828282]">
                        <div
                          className="grid grid-cols-12 py-[22px] "
                          key={postData.id}>
                          <div className="relative col-span-2 self-center">
                            {postData.image ? (
                              <Image
                                src={postData.image}
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
                              {postData.tags[2]}
                            </h1>
                            <h1 className="text-sm font-lato font-bold text-[#4F4F4F]">
                              {postData.owner.lastName}
                            </h1>
                            <h1 className="text-sm font-lato text-[#4F4F4F] text-ellipsis">
                              {postData.text}
                            </h1>
                          </div>
                          <div className="col-span-5 w-full">
                            <h1 className="text-base font-lato text-[#4F4F4F]">
                              {postData.publishDate}
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
        ref={ref}
        onClick={handleActivatedInbox}
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
          ref={ref}
          onClick={handleActivatedHome}
          title="Contact Sale"
          className="fixed z-20 bottom-10 right-12 bg-gray-600 w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-500 hover:drop-shadow-2xl"
        />
      </Link>

      <button
        ref={ref}
        onClick={handleActivatedTask}
        title="Contact Sale"
        className="fixed z-90 bottom-10 right-32 bg-[#ffffff] w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-amber-100 hover:drop-shadow-2xl">
        <Image
          src="/icons/chrome-reader-orange-icon.svg"
          alt="search"
          width={28}
          height={28}
        />
      </button>
    </>
  );
});
export default QuickInbox;
