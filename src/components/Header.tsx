export default function Header() {
  return (
    <div className="flex justify-between items-center px-5 py-2 border-b-2 border-white relative">
      <div className="flex items-center">
        {/* 헤더에 로고 다시 추가 */}
        <div className="h-[60px] flex items-center">
          <img 
            src="/LOGO.jpg" 
            alt="Logo" 
            className="h-full w-auto object-contain" 
          />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">
          Web Page Name: PROJECT NAME
        </div>
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