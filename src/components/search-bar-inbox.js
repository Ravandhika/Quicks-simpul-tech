import Image from "next/image";
export default function SearchBarInbox(props) {
  const {
    handleOnChanges,
    values,
    handleEnterKey,
    handleOnFocus,
    handleOnBlur,
  } = props;
  return (
    <div className="flex justify-between rounded-lg items-center bg-white border-[1px] shadow-lg border-[##828282] h-10 w-full px-8">
      <input
        className="w-full  bg-white text-[#4F4F4F] leading-tight focus:outline-none  py-2 px-2 "
        id="search"
        type="text"
        placeholder="Search"
        onChange={handleOnChanges}
        value={values}
        onKeyDown={handleEnterKey}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <div className="">
        <Image
          src="/icons/search-gray-icon.svg"
          alt="search"
          width={18}
          height={18}
        />
      </div>
    </div>
  );
}
