"use client"; // 클라이언트 사이드 hook (useRouter) 사용 시 필요

import { useRouter } from "next/navigation";

export default function ToolBar() {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 h-screen w-[50px] bg-[#e0e0e0] flex flex-col items-center py-0 z-50">
      {/* 로고 영역 */}
      <div className="w-full h-[150px] flex items-center justify-center bg-white">
        <span className="font-bold text-black text-center p-2">Logo</span>
      </div>

      {/* 홈 버튼 */}
      <button onClick={() => router.back()} title="이전 페이지로">
        <img src="/tool2.png" alt="Back" width={30} height={30} />
      </button>

      {/* 추가 도구 버튼 */}
      <button title="기능3">
        <img src="/tool3.png" alt="Tool 3" width={30} height={30} />
      </button>
    </div>
  );
}