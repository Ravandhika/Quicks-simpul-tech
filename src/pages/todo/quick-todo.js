import { useCallback, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import TodoHeader from "@/components/todo-header";
import TodoTask from "@/components/todo-task";
import TodoAddTask from "@/components/todo-add-task";

export const QuickTodo = () => {
  const toNewAddedTask = useRef(null);
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const todoAPI = "https://jsonplaceholder.typicode.com/users";
  const [newTaskList, setNewTaskList] = useState([
    {
      taskName: "",
      taskDesc: "",
    },
  ]);
  const [newTaskInput, setNewTaskInput] = useState([]);
  const [displayForm, setDisplayForm] = useState("");

  useEffect(() => {
    toNewAddedTask.current?.scrollIntoView();
  }, [displayForm]);

  useEffect(() => {
    getTodo();
  }, []);

  const openFormTask = () => {
    setDisplayForm(!displayForm);
    console.log(!displayForm);
  };
  const handleSaveNewTask = () => {
    setNewTaskList((prevState) => [
      ...prevState,
      { taskName: "", taskDesc: "" },
    ]);
  };

  const getTodo = useCallback(() => {
    axios
      .get(todoAPI)
      .then((res) => {
        setTodoList(res.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, [todoList]);

  return (
    <>
      <div className="fixed z-90 bottom-28 right-12 flex flex-col bg-white text-white text-base w-[650px] h-[600px] min-h-max py-6 px-8 mt-1 mb-1 rounded-lg overflow-y-auto ">
        <TodoHeader setDisplayForm={openFormTask} displayForm={displayForm} />
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
                    <h1 className="text-[#4F4F4F]">Loading Task List ...</h1>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {todoList.map((todoData, i) => {
                return (
                  <div
                    className="border-t-[1px] border-[#828282] first:border-0"
                    key={i}>
                    <TodoTask
                      taskName={todoData.company.bs}
                      taskTodo={todoData.company.catchPhrase}
                    />
                    {/* <TodoAddTask /> */}
                  </div>
                );
              })}
              {!displayForm ? (
                <>
                  <TodoAddTask />
                  <div ref={toNewAddedTask} />
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
      <button
        title="Contact Sale"
        className="fixed z-30 bottom-10 right-8 bg-[#ffffff] w-[62px] h-[62px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-amber-100 hover:drop-shadow-2xl">
        <Image
          src="/icons/chrome-reader-orange-icon.svg"
          alt="search"
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
    </>
  );
};
export default QuickTodo;
