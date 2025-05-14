"use client"; // 클라이언트 사이드 hook (useRouter) 사용 시 필요

import { useRouter } from "next/navigation";

export default function ToolBar() {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 h-screen w-[50px] bg-[#e0e0e0] flex flex-col items-center py-2 gap-4 z-50">
      {/* 툴바에서 로고 제거 */}
      
      {/* 홈 버튼 */}
      <button onClick={() => router.push("/")} title="홈으로 가기" className="mt-2">
        <img src="/tool1.png" alt="Home" width={30} height={30} />
      </button>

      {/* 뒤로가기 버튼 */}
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