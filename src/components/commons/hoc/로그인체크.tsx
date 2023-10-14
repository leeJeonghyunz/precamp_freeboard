import { useRouter } from "next/router";
import { useEffect } from "react";

export const 로그인체크 = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인이 필요합니다.");
      void router.push("/main");
    }
  });
  return <컴포넌트 {...프롭스} />;
};
