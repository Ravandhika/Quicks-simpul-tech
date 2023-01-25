import React from "react";
import { generateDate, months } from "@/utils/calendar";
import cn from "@/utils/cn";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function DatePicker(props) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    props.setDate(selectDate.format("MM/DD/YYYY"));
  }, [selectDate.format("MM/DD/YYYY")]);

  return (
    <>
      <div className="flex justify-between rounded-lg items-center bg-white border-[1px] w-56 shadow-lg border-[#828282] h-10 px-2">
        <input
          onClick={() => {
            setShowDatePicker(!showDatePicker);
          }}
          className="w-full bg-white text-[#4F4F4F] font-lato leading-tight focus:outline-none  py-2  "
          id="search"
          type="text"
          value={selectDate.format("MM/DD/YYYY")}
          onChange={() => {
            console.log("date Changed");
          }}
          placeholder="Search"
        />
        <button
          onClick={() => {
            setShowDatePicker(!showDatePicker);
          }}
          className="transition-all">
          <Image
            src="/icons/calendar-icon.svg"
            alt="search"
            width={18}
            height={18}
          />
        </button>
      </div>
      {showDatePicker ? (
        <>
          <div className="relative">
            <div className="absolute -right-64  top-2 bg-white z-40 w-72 h-[22rem] border-[1px] border-[#828282] ">
              <div className="flex flex-row justify-between items-center p-4">
                <div>
                  <button
                    onClick={() => {
                      setToday(today.month(today.month() - 1));
                    }}>
                    <Image
                      src="/icons/chevron-left-icon.svg"
                      alt="people"
                      width={8}
                      height={8}
                    />
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setToday(currentDate);
                    }}
                    className="text-[#4F4F4F] font-bold font-lato">
                    {months[today.month()]} {today.year()}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setToday(today.month(today.month() + 1));
                    }}>
                    <Image
                      src="/icons/chevron-right-icon.svg"
                      alt="people"
                      width={8}
                      height={8}
                    />
                  </button>
                </div>
              </div>
              <div className="w-full grid grid-cols-7 ">
                {days.map((day, index) => {
                  return (
                    <h1
                      key={index}
                      className="grid place-content-center h-10 text-[#4F4F4F] font-lato font-bold text-sm  ">
                      {day}
                    </h1>
                  );
                })}
              </div>
              <div className="grid grid-cols-7">
                {generateDate(today.month(), today.year()).map(
                  ({ date, currentMonth, today }, index) => {
                    return (
                      <div
                        key={index}
                        className="h-10 grid place-content-center">
                        <h1
                          className={cn(
                            currentMonth
                              ? "text-[#4F4F4F] font-lato "
                              : "text-gray-400 ",
                            today
                              ? "border border-[#2F80ED] font-lato text-[#4f4f4f] h-10 w-10 rounded-full"
                              : "",
                            selectDate.format("MM/DD/YYYY") ===
                              date.format("MM/DD/YYYY")
                              ? "bg-[#2F80ED] font-lato text-sm text-[#ffffff] h-10 w-10 rounded-full"
                              : "",
                            "h-10 w-10 font-lato text-sm rounded-full grid place-content-center hover:bg-[#2F80ED] hover:text-white transition-all cursor-pointer select-none"
                          )}
                          onClick={() => {
                            setSelectDate(date);
                            setShowDatePicker(false);
                          }}>
                          {date.date()}
                        </h1>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
