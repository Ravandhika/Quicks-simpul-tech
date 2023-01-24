import SearchBarHome from "@/components/search-bar-home";
import QuickTodo from "@/pages/todo/quick-todo";

export default function Todo() {
  return (
    <div className="grid grid-cols-10 bg-[#262626] h-screen">
      <div className="col-span-2  border-r-[1px] border-white"></div>
      <div className="col-span-8">
        <SearchBarHome />
        <QuickTodo />
      </div>
    </div>
  );
}
