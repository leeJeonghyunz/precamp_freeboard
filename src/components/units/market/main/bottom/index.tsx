import * as S from "./styles";
import Button02 from "../../../../commons/button/02";
import ItemCard02Basket from "../../../../commons/itemCard/02-basket";
import WatchedItemPage from "../../../../commons/wathchedItem/index";
import { USED_ITEMS } from "./LiveMarketPageBottom.queries";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import { isEditState } from "../../../../../commons/stores";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { useRecoilState } from "recoil";
import type { IQuery } from "../../../../../commons/types/generated/types";

export default function LiveMarketPageBottom(): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const { oncLickMoveToPage } = useMoveToPage();
  const { data } = useQuery<Pick<IQuery, "fetchUseditems">>(USED_ITEMS);

  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });

  const onClickUpload = (): void => {
    setIsEdit(false);
    void router.push(`/markets/product/register`);
    console.log(isEdit);
  };

  return (
    <>
      <S.Wrapper isMobile={isMobile}>
        <S.WrapperLeft>
          {data?.fetchUseditems.map((el) => (
            <ItemCard02Basket
              isMobile={isMobile}
              el={el}
              key={el?._id}
              id={el._id}
              name={el.name}
              contents={el.contents}
              price={el?.price}
            />
          ))}
        </S.WrapperLeft>
        {!isMobile && (
          <S.WrapperRight>
            <WatchedItemPage />
            <S.basket onClick={oncLickMoveToPage("/markets/product/basket")}>
              <S.HeartOutlinedIcon></S.HeartOutlinedIcon>
            </S.basket>
          </S.WrapperRight>
        )}
      </S.Wrapper>
      <Button02 onClick={onClickUpload} title="등록하기" />
    </>
  );
}
