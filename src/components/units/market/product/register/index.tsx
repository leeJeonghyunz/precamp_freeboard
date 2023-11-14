import { useRecoilState } from "recoil";
import { isEditState } from "../../../../../commons/stores";
import { useAuth } from "../../../../commons/hooks/custom/useAuth";
import Title01 from "../../../../commons/title/title01";
import ProductRegisterBody from "./body/ProductRegisterBody.index";

export default function ProductRegister(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return (
    <>
      <Title01 title={isEdit ? "수정하기" : "상품 등록하기"} />
      <ProductRegisterBody isEdit={isEdit} />
    </>
  );
}
