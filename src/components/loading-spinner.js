export default function LoadingSpinner() {
  return (
    <div class="bg-gray-200 w-full  flex justify-center items-center">
      <div class="flex flex-col w-full space-y-4 items-center justify-center bg-white">
        <div class="flex h-12 w-12 items-center justify-center rounded-full border-[1px] bg-gradient-to-br from-[#F8F8F8] to-[#C4C4C4] animate-spin">
          <div class="h-9 w-9 rounded-full bg-white" />
        </div>
        <div>
          <h1 className="text-[#4F4F4F]">Loading Chats ...</h1>
        </div>
      </div>
    </div>
  );
}
