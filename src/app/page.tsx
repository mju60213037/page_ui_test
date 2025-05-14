import ToolBar from "@/components/ToolBar";
import Header from "@/components/Header";

export default function StartPage() {
  return (
    <div className="flex h-screen text-white font-sans bg-[#1c1c1c]">
      <ToolBar />

      <div className="ml-[50px] flex flex-col flex-1">
        <Header />

        <div className="flex flex-1 overflow-auto">
          {/* MenuBar */}
          <div className="w-[180px] bg-[#2a2a2a] border-r-2 border-white shrink-0">
            <h4 className="font-bold px-4 py-3">※ Menu Bar</h4>
            {[1, 2, 3].map((toolNum) => (
              <div key={toolNum} className="bg-[#2a2a2a]">
                <div className="relative pl-4 py-2 font-bold bg-[#3a3a3a] hover:before:content-[''] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-1 hover:before:h-full hover:before:bg-blue-500">
                  ▶ Tool {toolNum}
                </div>
                <ul className="pl-6 py-2 space-y-1 text-sm">
                  {[1, 2, 3, 4].map((f) => (
                    <li key={f} className="hover:text-blue-400 cursor-pointer">
                      Function {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Main Panel */}
          <div className="flex-1 px-10 py-6 flex flex-col gap-6">
            {/* Search Panel */}
            <div className="flex">
              <input
                type="text"
                placeholder="검색할 내용 적기 (Search)"
                className="flex-1 bg-[#444] text-white px-4 py-2 rounded-l-lg text-sm"
              />
              <button className="bg-[#444] px-3 py-2 rounded-r-lg hover:bg-[#555]">
                <img src="/search.png" alt="Search" width="20" height="20" />
              </button>
            </div>

            {/* Search Log */}
            <div className="border-2 border-white rounded-lg p-4">
              <h4 className="text-lg mb-2">최근 검색 기록 (Search Log)</h4>
              <div className="flex flex-wrap gap-2">
                {[...Array(6)].map((_, i) => (
                  <button
                    key={i}
                    className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-[#444] hover:text-white font-bold text-sm"
                  >
                    과거 검색 기록 {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Announcement & Recommended Post */}
            <div className="border-2 border-white rounded-lg p-4">
              <h4 className="text-lg mb-2">공지 / 업데이트 사항 (Announcement)</h4>
              <hr className="border-white my-2" />
              <div className="flex justify-between">
                {/* Announcement List */}
                <div className="flex-1 space-y-4">
                  {["2025.05.02 (금)", "2025.04.30 (수)"].map((date, i) => (
                    <div key={i}>
                      <strong className="text-[#bbccdd]">{date}</strong>
                      <ul className="list-disc ml-6">
                        <li className="text-white">공지 사항 1</li>
                        <li className="text-white">공지 사항 2</li>
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Recommended Post */}
                <div className="w-1/2 ml-6 border-2 border-white rounded-lg p-4">
                  <h4 className="text-[#bbccdd] mb-2">
                    이번주 추천 게시물 (Recommended Post)
                  </h4>
                  <div className="flex items-center p-3 rounded-lg hover:bg-[#2a2a2a] transition">
                    <img
                      src="/recomimg.png"
                      alt="추천 이미지"
                      width="60"
                      height="60"
                      className="rounded mr-3"
                    />
                    <div className="text-sm leading-snug">
                      <strong className="block text-white text-base mb-1">
                        이번주 추천 게시물 제목
                      </strong>
                      추천 게시물 요약 내용이 여기에 들어갑니다.
                      <br />
                      어쩌고 저쩌고 ~~~~
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* /Main Panel */}
        </div> {/* /Content */}
      </div> {/* /Right Section */}
    </div>
  );
}
