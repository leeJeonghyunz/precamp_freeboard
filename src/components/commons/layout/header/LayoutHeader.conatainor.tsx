import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "../../../units/main/Main.queries";
import type { IQuery } from "../../../../commons/types/generated/types";
import { useApolloClient, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, accessTokenUserName, isLoginState } from "../../../../commons/stores";
import { useMutationLogoutUser } from "../../hooks/mutations/useMutationLogoutUser";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

export default function LayoutHeader(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });
  const client = useApolloClient();
  const router = useRouter();
  const [logoutUser] = useMutationLogoutUser();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [userName, setUserName] = useRecoilState(accessTokenUserName);

  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  if (data !== undefined) {
    setUserName(data?.fetchUserLoggedIn?.name);
    console.log(data?.fetchUserLoggedIn?.name);
    console.log(data);
    setIsLogin(true);
  } else {
    setUserName("");
    console.log(isLogin);
  }
  console.log(isLogin);

  const onClickLogo = (): void => {
    void router.push("/boards/list");
  };

  const onClickLogin = (): void => {
    void router.push("/main");
  };

  const onClickJoin = (): void => {
    void router.push("/join");
  };

  // useEffect(() => {
  //   if (accessToken !== undefined) {
  //     setIsLogin(true);
  //   }
  // });

  const onClcikLogout = async (): Promise<void> => {
    const result = await logoutUser({
      update(cache) {
        cache.writeQuery({
          query: FETCH_USER_LOGGED_IN,
          data: { fetchUserLoggedIn: null },
        });
      },
    });
    console.log("s눌렀다");
    setAccessToken("");
    setIsLogin(false);
    setUserName("");
    router.reload();
  };

  return (
    <LayoutHeaderUI
      data={data}
      onClickLogo={onClickLogo}
      userName={userName}
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
      onClcikLogout={onClcikLogout}
      isMobile={isMobile}
    />
  );
}
