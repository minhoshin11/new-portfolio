"use client";

import { useState } from "react";

type MyNumber = "Email" | "Phone";

export default function CopyNumber({ type }: { type: MyNumber }) {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "tlsalsgh777@naver.com"; // 복사할 이메일
  const phone = "01022377592";

  const copyToClipboard = async () => {
    try {
      // Email 또는 Phone에 따라 복사할 텍스트 선택
      type === "Email"
        ? await navigator.clipboard.writeText(email)
        : await navigator.clipboard.writeText(phone);

      // 복사 성공 시 copySuccess 상태를 true로 설정
      setCopySuccess(true);

      // 2초 후 다시 버튼 텍스트를 원래대로 돌림
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex flex-col h-[5vw]">
      <button
        onClick={copyToClipboard}
        className={`px-4 py-2 text-white rounded-xl transition-colors duration-300 ${
          copySuccess
            ? "bg-green-600 hover:bg-green-500"
            : "bg-blue-500 hover:bg-blue-700"
        }`}
      >
        {copySuccess ? "Copied !" : type}
      </button>
    </div>
  );
}
