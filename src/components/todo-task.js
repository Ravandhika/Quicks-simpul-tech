import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import DatePicker from "@/components/date-picker";
import dayjs from "dayjs";

export const TodoTask = (props) => {
  const { taskTodo, taskName, taskId } = props;
  const [checkBoxState, setCheckboxState] = useState(false);
  const [taskState, setTaskState] = useState(false);
  const currentDate = dayjs();
  const [date, setDate] = useState(currentDate.toDate().toLocaleDateString());

  // const dateHandler = (dateParam) => {
  //   <></>;
  // };
  useEffect(() => {}, [date]);

  return (
    <div className="flex flex-col ">
      <div className="flex flex-row items-start py-[22px] space-x-4 justify-between">
        <div className="block">
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                onChange={() => {
                  setCheckboxState(!checkBoxState);
                }}
                type="checkbox"
                className="w-[18px] h-[18px]"
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
          {taskState ? (
            <>
              <div className="flex flex-row items-start space-x-3 ">
                <div className=" min-w-max">
                  <Image
                    src="/icons/clock-icon.svg"
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
                    <div className="mt-2 min-w-max">
                      <Image
                        src="/icons/edit-blue-icon.svg"
                        alt="people"
                        width={18}
                        height={18}
                      />
                    </div>
                    <h1 className="text-[#4F4F4F] font-lato">{taskTodo}</h1>
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
                    <h1 className="text-[#4F4F4F] font-lato">No Description</h1>
                  </>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
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
            <Image
              src="/icons/chevron-up-icon.svg"
              alt="people"
              width={12}
              height={12}
            />
          </button>
        </div>
        <div>
          <button className="text-[#4F4F4F]">
            <Image
              src="/icons/more-horizontal-gray-icon.svg"
              alt="people"
              width={14}
              height={14}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoTask;
