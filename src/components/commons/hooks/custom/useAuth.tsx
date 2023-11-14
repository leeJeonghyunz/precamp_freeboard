import { useRouter } from "next/router";
import { useEffect } from "react";
import { restoreAccessTokenLoadable } from "../../../../commons/stores";
import { useRecoilValueLoadable } from "recoil";

// export const useAuth = (): void => {
//   const router = useRouter();
//   const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

//   useEffect(() => {
//     void aaa.toPromise().then((newAccessToken) => {
//       if (newAccessToken === undefined) {
//         alert("로그인 후 이용가능합니다.");
//         void router.push("/main");
//         console.log("토큰없음");
//       } else {
//         console.log(newAccessToken);
//       }
//     });
//   }, []);
// };
