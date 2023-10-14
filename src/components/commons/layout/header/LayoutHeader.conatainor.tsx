import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "../../../units/main/Main.queries";
import type { IQuery } from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenDataName } from "../../../../commons/stores";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [dataName, setDataName] = useRecoilState(accessTokenDataName);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  if (data !== undefined) {
    setDataName(data.fetchUserLoggedIn.name);
  }

  const onClickLogo = (): void => {
    void router.push("/boards/list");
  };

  const onClickLogin = (): void => {
    void router.push("/main");
  };

  const onClickJoin = (): void => {
    void router.push("/join");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      dataName={dataName}
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
    />
  );
}
