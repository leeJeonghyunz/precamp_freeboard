import { useRouter } from "next/router";
import {
  USED_ITEM,
  useQueryFetchUsedItem,
} from "../../../../../commons/hooks/queries/useQueryFetchUsedItem";
import * as S from "./styles";
import { useMutationToggleUsedItemPick } from "../../../../../commons/hooks/mutations/useMutationToggleUseditemPick";
import { useMutationDeleteUsedItem } from "../../../../../commons/hooks/mutations/useMutationDeleteUsedItem";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../../../commons/stores";
import KakaoMapPage from "../../../../../commons/maps/02-address";
import Dompurify from "dompurify";
import { onClickPayment } from "../../../../../commons/payment";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ProductDetailBottom(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchUsedItem({
    useditemId: String(router.query.number),
  });
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  const [toggleUseditemPick] = useMutationToggleUsedItemPick();
  const [deleteUsedItem] = useMutationDeleteUsedItem();
  const image = data?.fetchUseditem.images[0];
  const address = data?.fetchUseditem.useditemAddress?.address;

  const onClickPick = async (): Promise<void> => {
    await toggleUseditemPick({
      variables: {
        useditemId: String(router.query.number),
      },
      refetchQueries: [
        {
          query: USED_ITEM,
          variables: { useditemId: String(router.query.number) },
        },
      ],
    });
  };

  const onClickDelete = async (): Promise<void> => {
    await deleteUsedItem({
      variables: {
        useditemId: String(router.query.number),
      },
    });
    alert("삭제되었습니다");
    void router.push("/markets");
  };

  const onClickEdit = (): void => {
    void router.push(`/markets/product/${String(router.query.number)}/edit`);
    setIsEdit(true);
    console.log(isEdit);
  };

  return (
    <>
      <S.Wrapper>
        <S.WrapperTop>
          <S.Remarks>{data?.fetchUseditem.remarks}</S.Remarks>
          <S.PickCountDiv>
            <S.PickCountHeart onClick={onClickPick}>♥</S.PickCountHeart>
            <S.PickCount>{data?.fetchUseditem.pickedCount}</S.PickCount>
          </S.PickCountDiv>
        </S.WrapperTop>
        <S.WrapperBottom>
          <S.Price>{data?.fetchUseditem.price}원 </S.Price>
          <S.ImageBox>
            {image && (
              <S.Image src={`https://storage.googleapis.com/${image}`} />
            )}
          </S.ImageBox>
          <S.Content
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(data?.fetchUseditem?.contents),
            }}
          />
          <S.MapDiv>
            <KakaoMapPage width={"800px"} height={"250px"} address={address} />
          </S.MapDiv>
          <S.BuyBtnWrapper>
            <S.BuyBtn onClick={onClickPayment}>구매하기</S.BuyBtn>
          </S.BuyBtnWrapper>
        </S.WrapperBottom>
      </S.Wrapper>
      <S.ButtonDiv>
        <S.Btn onClick={onClickEdit}>수정하기</S.Btn>
        <S.Btn onClick={onClickDelete}> 삭제하기</S.Btn>
      </S.ButtonDiv>
    </>
  );
}
