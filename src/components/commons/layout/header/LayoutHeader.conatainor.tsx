import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "../../../units/main/Main.queries";
import type { IQuery } from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, accessTokenUserName, isLoginState } from "../../../../commons/stores";
import { useMutationLogoutUser } from "../../hooks/mutations/useMutationLogoutUser";
import { useMediaQuery } from "react-responsive";

export default function LayoutHeader(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });

  const router = useRouter();
  const [logoutUser] = useMutationLogoutUser();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [userName, setUserName] = useRecoilState(accessTokenUserName);

  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  if (data !== undefined) {
    const a = data.fetchUserLoggedIn.name;
    setUserName(a);
    console.log(data);
    console.log(a);
  } else {
    setUserName("");
    console.log("1");
  }

  const onClickLogo = (): void => {
    void router.push("/boards/list");
  };

  const onClickLogin = (): void => {
    void router.push("/main");
    console.log(userName);
    console.log(accessToken);
    console.log(isLogin);
  };

  const onClickJoin = (): void => {
    void router.push("/join");
  };

  const onClcikLogout = async (): Promise<void> => {
    const result = await logoutUser({
      refetchQueries: [
        {
          query: FETCH_USER_LOGGED_IN,
        },
      ],
    });
    setAccessToken("");
    setIsLogin(false);
    setUserName("");
    console.log(result);
    console.log(data);
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      userName={userName}
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
      onClcikLogout={onClcikLogout}
      isMobile={isMobile}
    />
  );
}
