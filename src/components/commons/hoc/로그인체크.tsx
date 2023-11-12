import { useRouter } from "next/router";
import { useEffect } from "react";
import { accessTokenState } from "../../../commons/stores";
import { useRecoilState } from "recoil";

export const 로그인체크 = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (accessToken === null) {
      alert("로그인이 필요합니다.");
      void router.push("/main");
      console.log(accessToken);
    } else {
      console.log(1);
    }
  });
  return <컴포넌트 {...프롭스} />;
};
