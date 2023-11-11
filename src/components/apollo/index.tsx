import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../commons/stores";

const GLOBAL_STATE = new InMemoryCache();
interface IApolloSettings {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettings): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 1.프리렌더링 예제
  // if (process.browser) {
  //   alert("반갑습니다");
  //   const result = localStorage.getItem("accessToken");
  //   console.log(result);
  //   setAccessToken(result ?? "");
  //   console.log("ㅎㅇ");
  // } else {
  //   console.log("지금은 프론트엔드다.");
  // }

  // 2. 프리렌더링 예제 typeof window
  // if (typeof window !== "undefined") {
  //   console.log("브라우저다.");
  // } else {
  //   console.log("서버다.");
  // }

  // 3.프리렌더링 예제 useEffect
  useEffect(() => {
    // 1. 기존방식(refreshToken 이전 )
    // const result = localStorage.getItem("accessToken");

    // // 2.refreshToken 배운 이후
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   // 1.에러를 캐치
  //   if (typeof graphQLErrors !== "undefined") {
  //     for (const err of graphQLErrors) {
  //       // 1-2. 해당 에러가 토큰만료인지 체크
  //       if (err.extensions.code === "UNATHENTICATED") {
  //         return fromPromise(
  //           // 2. refresh 토큰으로 에러 재발급
  //           getAccessToken().then((newAccessToken) => {
  //             setAccessToken(newAccessToken ?? "");
  //             // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
  //             operation.setContext({
  //               headers: {
  //                 ...operation.getContext().headers, // Authorization: Bearer !@#!@$!$!@S =>만료된 토큰
  //                 Authorization: `Bearer ${newAccessToken}`, // 3-2 토큰 새걸로 바꾸기
  //               },
  //             });
  //             // 3-3 방금 수정한 쿼리 재요청
  //           }),
  //         ).flatMap(() => forward(operation));
  //       }
  //     }
  //   }
  // });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    //   // 1.에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        //       // 1-2. 해당 에러가 토큰만료인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            //           // 2. refresh 토큰으로 에러 재발급
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              //             // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
              operation.setContext({
                header: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
              //             // 3-3 방금 수정한 쿼리 재요청
            }),
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 임시데이터 저장하기
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>)
  ;
}
