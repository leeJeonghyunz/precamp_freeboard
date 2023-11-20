import * as S from "./styles";
import { useRouter } from "next/router";
import { useQueryFetchUsedItem } from "../../../../../commons/hooks/queries/useQueryFetchUsedItem";
import { getDate } from "../../../../../commons/libraries/utils";

export default function ProductDetailTop(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchUsedItem({
    useditemId: String(router.query.number),
  });

  return (
    <>
      <S.Wrapper>
        <S.WrapperLeft>
          <S.ProfileImg src="/images/ic_profile-96px.png" />
          <S.DataWrapper>
            <div>{data?.fetchUseditem.name}</div>
            <div>{getDate(data?.fetchUseditem.createdAt)}</div>
          </S.DataWrapper>
        </S.WrapperLeft>
        <S.LinkIcon></S.LinkIcon>
      </S.Wrapper>
      <S.GrayLine></S.GrayLine>
    </>
  );
}
