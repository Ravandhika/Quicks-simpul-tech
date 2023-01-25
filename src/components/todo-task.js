import { useCallback, useState, useEffect, Fragment } from "react";
import Image from "next/image";
import DatePicker from "@/components/date-picker";
import dayjs from "dayjs";
import { Menu, Transition } from "@headlessui/react";
import EdiText from "react-editext";

export const TodoTask = (props) => {
  const { taskTodo, taskName, taskId } = props;
  const [checkBoxState, setCheckboxState] = useState(false);
  const [taskState, setTaskState] = useState(false);
  const currentDate = dayjs();
  const [date, setDate] = useState(currentDate.format("MM/DD/YYYY"));
  const [todoDesc, setTodoDesc] = useState(taskTodo);
  const [editing, setEditing] = useState(false);

  useEffect(() => {}, [date]);

  // const handleChangeInput = (e) => {
  //   setTodoDesc(e.target.value);
  // };
  const handleSave = (todoDesc) => {
    setTodoDesc(todoDesc);
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-row items-center py-[22px] space-x-4 justify-between">
          <div className="block">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  onChange={() => {
                    setCheckboxState(!checkBoxState);
                  }}
                  type="checkbox"
                  className="w-[18px] font-lato h-[18px]"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-1 flex-col  space-y-[16px] w-full ">
            <div>
              {checkBoxState ? (
                <h1 className="text-[#828282] font-lato font-bold line-through ">
                  {taskName}
                </h1>
              ) : (
                <h1 className="text-[#4F4F4F] font-lato font-bold ">
                  {taskName}
                </h1>
              )}
            </div>
            {/* Diclosure */}
          </div>
          <div className="">
            <h1 className="text-[#EB5757] font-lato text-sm ">2 Days Left</h1>
          </div>
          <div>
            <h1 className="text-[#4F4F4F] font-lato text-sm">{date}</h1>
          </div>
          <div>
            <button
              onClick={() => {
                setTaskState(!taskState);
              }}
              className="text-[#4F4F4F]">
              {!taskState ? (
                <Image
                  src="/icons/chevron-down-icon.svg"
                  alt="people"
                  width={12}
                  height={12}
                />
              ) : (
                <Image
                  src="/icons/chevron-up-icon.svg"
                  alt="people"
                  width={12}
                  height={12}
                />
              )}
            </button>
          </div>
          <div className="">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full  py-2 text-sm font-medium text-[#]  rounded-md">
                  <Image
                    src="/icons/more-horizontal-gray-icon.svg"
                    alt="people"
                    width={14}
                    height={14}
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
                          "block px-4 py-2 text-sm font-lato text-[#EB5757] hover:text-[#884949]"
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
        {taskState ? (
          <div className="flex flex-col space-y-4 pb-[22px] px-8">
            <div className="flex flex-row items-center space-x-3 ">
              <div className=" min-w-max">
                <Image
                  src="/icons/clock-blue-icon.svg"
                  alt="people"
                  width={20}
                  height={18}
                />
              </div>
              <div>
                <DatePicker setDate={setDate} />
              </div>
            </div>
            <div className="flex flex-row items-start space-x-4 ">
              {taskTodo ? (
                <>
                  <button
                    onClick={() => setEditing((v) => !v)}
                    className="mt-2 min-w-max">
                    <Image
                      src="/icons/edit-blue-icon.svg"
                      alt="people"
                      width={16}
                      height={16}
                    />
                  </button>
                  <div className="w-full">
                    <EdiText
                      submitOnUnfocus={true}
                      editOnViewClick={true}
                      className="text-[#4F4F4F] font-lato w-full"
                      editButtonProps={{
                        style: {
                          display: "none",
                        },
                      }}
                      saveButtonClassName={{
                        style: {
                          display: "none",
                        },
                      }}
                      cancelButtonClassName={{
                        style: {
                          display: "none",
                        },
                      }}
                      value={todoDesc}
                      type="textarea"
                      onSave={handleSave}
                      editing={editing}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-2 min-w-max">
                    <Image
                      src="/icons/edit-blue-icon.svg"
                      alt="people"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className="w-full">
                    <EdiText
                      submitOnUnfocus={true}
                      editOnViewClick={true}
                      className="text-[#4F4F4F] font-lato w-full"
                      editButtonProps={{
                        style: {
                          display: "none",
                        },
                      }}
                      saveButtonClassName={{
                        style: {
                          display: "none",
                        },
                      }}
                      cancelButtonClassName={{
                        style: {
                          display: "none",
                        },
                      }}
                      value="no Description"
                      type="textarea"
                      onSave={handleSave}
                      editing={editing}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* <TodoAddTask/> */}
    </>
  );
};
export default TodoTask;
