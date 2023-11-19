import * as S from "./MypageSidebar.styles";
import { accessTokenUserName } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import type { IMypageSideBarProps } from "./MyPageSidebar.types";

export default function MypageSidebarUI(props: IMypageSideBarProps): JSX.Element {
  const [userName, setUserName] = useRecoilState(accessTokenUserName);
  return (
    <>
      <S.Wrapper>
        <S.Title>Mypage</S.Title>
        <S.ProfileImg src="/images/ic_profile-96px.png" />
        <S.Title>{userName} 님</S.Title>
        <S.PointBox>
          <S.Icon src="/images/Vector.png" />
          <S.LittleSpan> 100,000</S.LittleSpan>
        </S.PointBox>
        <S.WrapperBottom>
          <S.WrapperBottomNav>내 장터</S.WrapperBottomNav>
          <S.WrapperBottomNav>내 포인트</S.WrapperBottomNav>
          <S.WrapperBottomNav>내 프로필</S.WrapperBottomNav>
        </S.WrapperBottom>
      </S.Wrapper>
    </>
  );
}
