import Image from "next/image";
export default function SearchBarHome() {
  return (
    <div className="flex items-center bg-[#4F4F4F]">
      <div className="px-6 ">
        <Image
          src="/icons/search-white-icon.svg"
          alt="search"
          width={24}
          height={24}
        />
      </div>
      <div>
        <input
          className="w-full bg-[#4F4F4F] text-[#F2F2F2] leading-tight focus:outline-none py-2 px-2 h-[58px]"
          id="search"
          type="text"
          placeholder="Search teams or members"
        />
      </div>
    </div>
  );
}
