import { useRouter } from "next/router";
import MypageSidebarUI from "./MypageSidebar.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../units/main/Main.queries";

export default function MypageSideBar(): JSX.Element {
  const router = useRouter();

  const onClickEdit = () => {
    void router.push("/mypage/edit");
  };
  return <MypageSidebarUI onClickEdit={onClickEdit} />;
}
