import PopUpQuicks from "@/components/pop-up-quicks";
import QuickInbox from "@/pages/messages/quick-inbox";
import SearchBarHome from "@/components/search-bar-home";

export default function Message() {
  return (
    <div className="grid grid-cols-10 bg-[#262626] h-screen">
      <div className="col-span-2  border-r-[1px]  border-white"></div>
      <div className="col-span-8">
        <SearchBarHome />
        <QuickInbox />
      </div>
    </div>
  );
}
