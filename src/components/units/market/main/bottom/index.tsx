import { useQuery } from "@apollo/client";
import { USED_ITEMS } from "./LiveMarketPageBottom.queries";
import type { IQuery } from "../../../../../commons/types/generated/types";
import * as S from "./styles";
import { useRouter } from "next/router";
import Button02 from "../../../../commons/button/02";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../../commons/stores";
import WatchedItemPage from "../../../../commons/wathchedItem/index";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import ItemCard02Basket from "../../../../commons/itemCard/02-basket";

export default function LiveMarketPageBottom(): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const { oncLickMoveToPage } = useMoveToPage();

  const { data } = useQuery<Pick<IQuery, "fetchUseditems">>(USED_ITEMS);

  const onClickUpload = (): void => {
    setIsEdit(false);
    void router.push(`/markets/product/register`);
    console.log(isEdit);
  };

  return (
    <>
      <S.Wrapper>
        <S.WrapperLeft>
          {data?.fetchUseditems.map((el) => (
            <ItemCard02Basket
              el={el}
              key={el?._id}
              id={el._id}
              name={el.name}
              contents={el.contents}
              price={el?.price}
            />
          ))}
        </S.WrapperLeft>
        <S.WrapperRight>
          <WatchedItemPage />
          <S.basket onClick={oncLickMoveToPage("/markets/product/basket")}>
            <S.HeartOutlinedIcon></S.HeartOutlinedIcon>
          </S.basket>
        </S.WrapperRight>
      </S.Wrapper>
      <Button02 onClick={onClickUpload} title="등록하기" />
    </>
  );
}
