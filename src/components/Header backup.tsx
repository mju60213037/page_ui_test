export default function Header() {
    return (
      <div className="flex justify-between items-center px-5 py-2 border-b-2 border-white relative">
        <div className="flex items-center">
          <img src="/LOGO.jpg" alt="Logo" width={0} height={60} />
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