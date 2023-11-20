import { useRouter } from "next/router";
import MypageSidebarUI from "./MypageSidebar.presenter";

export default function MypageSideBar(): JSX.Element {
  const router = useRouter();

  const onClickEdit = (): void => {
    void router.push("/mypage/edit");
  };
  return <MypageSidebarUI onClickEdit={onClickEdit} />;
}
