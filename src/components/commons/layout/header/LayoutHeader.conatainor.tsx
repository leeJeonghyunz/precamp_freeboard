import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "../../../units/main/Main.queries";
import type { IQuery } from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  accessTokenUserName,
  isLoginState,
} from "../../../../commons/stores";
import { useMutationLogoutUser } from "../../hooks/mutations/useMutationLogoutUser";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [logoutUser] = useMutationLogoutUser();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [userName, setUserName] = useRecoilState(accessTokenUserName);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  if (data !== undefined) {
    setUserName(data.fetchUserLoggedIn.name);
  }

  const onClickLogo = (): void => {
    void router.push("/boards/list");
  };

  const onClickLogin = (): void => {
    void router.push("/main");
    console.log(userName);
  };

  const onClickJoin = (): void => {
    void router.push("/join");
  };

  const onClcikLogout = async (): Promise<void> => {
    await logoutUser();
    setAccessToken("");
    setIsLogin(false);
    setUserName("");
  };
  console.log(accessToken);
  console.log(isLogin);
  console.log(userName);

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      userName={userName}
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
      onClcikLogout={onClcikLogout}
    />
  );
}
