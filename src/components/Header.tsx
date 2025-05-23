export default function Header() {
  return (
    <div className="flex justify-between items-center px-5 py-2 h-[60px] border-b-2 border-white bg-black">
      {/* 제목 중앙에 표시 */}
      <div className="w-full text-center text-xl font-bold">
        Web Page Name: PROJECT NAME
      </div>
      <div className="flex items-center gap-2">
        <select className="bg-transparent text-white border border-white px-2 py-1 text-sm hover:bg-[#444]">
          <option>한국어</option>
          <option>ENG</option>
        </select>
        <button className="border border-white px-3 py-1 text-sm hover:bg-[#444]">
          Log In
        </button>
      </div>
    </div>
  );
}