import * as S from "./MypageSidebar.styles";

export default function MypageSidebarUI(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Title>Mypage</S.Title>
        <S.ProfileImg src="/images/ic_profile-96px.png" />
        <S.Title>이름</S.Title>
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
