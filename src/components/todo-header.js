import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Inbox.module.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const TodoHeader = (props) => {
  const { subjectData } = props;

  return (
    <>
      <div className="flex justify-between justify-items-start   space-x-4  border-[#BDBDBD] ">
        <div className="flex items-center justify-start mx-8">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-lato font-bold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                My Tasks
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
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
              <Menu.Items className="absolute  -left-9 w-56 mt-2 origin-center bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 border-[1px] border-[#828282] rounded-lg">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-gray-900" : "text-[#4F4F4F]",
                          "block px-4 py-2 text-sm font-lato border-b-[1px] border-[#828282]"
                        )}>
                        Personal Errands
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-gray-900" : "text-[#4F4F4F]",
                          "block px-4 py-2 text-sm font-lato "
                        )}>
                        Urgent To-Do
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <button className="bg-[#2F80ED] px-4 py-2 rounded-lg">
            <h1 className="text-sm font-lato font-bold">New Task</h1>
          </button>
        </div>
      </div>
    </>
  );
};
export default TodoHeader;
