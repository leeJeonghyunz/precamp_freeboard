import * as S from "./styles";
import InputLong from "../../../../../commons/Input/long";
import Button01 from "../../../../../commons/button/01";
import InputLongNormal from "../../../../../commons/Input/longNormal";
import ImageUpload01 from "../../../../../commons/imageUpload/imageUpload";
import KakaoMapPage from "../../../../../commons/maps/02-address";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../../../commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { productRegisterSchema } from "../../../../../commons/validation/Main";
import { useRouter } from "next/router";
import { useMutationCreateUsedItem } from "../../../../../commons/hooks/mutations/useMutationCreateUsedItem";
import { useState } from "react";
import { ReactQuill } from "../../../../../commons/react-quill";
import { useMutationUploadFile } from "../../../../../commons/hooks/mutations/useMutationUploadFile";
import { USED_ITEMS } from "../../../main/bottom/LiveMarketPageBottom.queries";
import { useMutationUpdateUsedItem } from "../../../../../commons/hooks/mutations/useMutationUpdateUsedItem";
import type { MouseEvent } from "react";
import type { Address } from "react-daum-postcode";
import type { IUpdateUseditemInput } from "../../../../../../commons/types/generated/types";
import "react-quill/dist/quill.snow.css";
import { useQueryFetchUsedItem } from "../../../../../commons/hooks/queries/useQueryFetchUsedItem";

export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
}

interface IProductRegisterBodyProps {
  isEdit: boolean;
}

export default function ProductRegisterBody(props: IProductRegisterBodyProps): JSX.Element {
  const { register, handleSubmit, formState, setValue, trigger } = useForm<IFormData>({
    resolver: yupResolver(productRegisterSchema),
    mode: "onChange",
  });

  const router = useRouter();
  const [createUseditem] = useMutationCreateUsedItem();
  const [updateUseditem] = useMutationUpdateUsedItem();
  const [uploadFile] = useMutationUploadFile();
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const { data: usedItem } = useQueryFetchUsedItem({
    useditemId: String(router.query.number),
  });

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    try {
      const results = await Promise.all(files.map(async (el) => await uploadFile({ variables: { file: el } })));
      console.log("results:", results);
      const resultUrls = results.map((el) => el.data?.uploadFile.url);
      console.log("resultUrls:", resultUrls);
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            images: resultUrls,
            useditemAddress: {
              zipcode,
              address,
            },
          },
        },
        refetchQueries: [
          {
            query: USED_ITEMS,
          },
        ],
      });
      const { Modal } = await import("antd"); // code-spliting
      Modal.success({ content: "완료!!!~~" });
      void router.push(`/markets/product/${String(result.data?.createUseditem._id)}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onCompleteSearchAddress = (data: Address): void => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsOpen((prev) => !prev);
  };

  const onClickSearchAddress = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const onChangeImages = (event: any): void => {
    console.log(event.target.value);
  };

  const onClickEdit = async (data: IFormData): Promise<void> => {
    const results = await Promise.all(files.map(async (el) => await uploadFile({ variables: { file: el } })));
    console.log("results:", results);
    const resultUrls = results.map((el) => el.data?.uploadFile.url);
    console.log("resultUrls:", resultUrls);

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (data.name !== "") updateUseditemInput.name = data.name;
    if (data.remarks !== "") updateUseditemInput.remarks = data.remarks;
    if (data.contents !== "") updateUseditemInput.contents = data.contents;
    if (data.price !== null) updateUseditemInput.price = data.price;
    if (resultUrls.length > 0) updateUseditemInput.images = resultUrls;
    const result = await updateUseditem({
      variables: {
        updateUseditemInput,
        useditemId: String(router.query.number),
      },
      refetchQueries: [
        {
          query: USED_ITEMS,
        },
      ],
    });
    void router.push(`/markets/product/${String(result.data?.updateUseditem._id)}`);
    console.log(result);
  };

  return (
    <>
      <form onSubmit={wrapFormAsync(handleSubmit(props.isEdit ? onClickEdit : onClickSubmit))}>
        <InputLong register={register("name")} tag="상품명" defaultValue={usedItem?.fetchUseditem.name} />
        <div>{formState.errors.name?.message}</div>
        <InputLong register={register("remarks")} tag="한줄요약" defaultValue={usedItem?.fetchUseditem.remarks} />
        <div>{formState.errors.remarks?.message}</div>
        <S.Contents>
          <span>내용</span>
          <ReactQuill
            style={{ height: "300px" }}
            onChange={onChangeContents}
            defaultValue={usedItem?.fetchUseditem.contents}
          />
        </S.Contents>
        <InputLong register={register("price")} tag="판매가격" defaultValue={usedItem?.fetchUseditem.price} />
        <div>{formState.errors.price?.message}</div>
        <InputLongNormal tag="태그입력" />
        <div>
          <p>사진첨부</p>
          <ImageUpload01
            setValue={setValue}
            register={register("images")}
            onChange={onChangeImages}
            files={files}
            setFiles={setFiles}
          />
        </div>
        <S.LoacationBox>
          <div>
            {isOpen && (
              <S.ModalAddress open={isOpen} onOk={onClickSearchAddress} onCancel={onClickSearchAddress}>
                <S.ModalAddressInput onComplete={onCompleteSearchAddress} />
              </S.ModalAddress>
            )}
            <S.BoldFont>거래 위치</S.BoldFont>
            <S.Map>
              <KakaoMapPage address={address} width={"380px"} height={"250px"} />
            </S.Map>
            <S.SearchAddress onClick={onClickSearchAddress} type="button">
              주소 검색
            </S.SearchAddress>
          </div>
          <S.GPSInfo>
            <S.BoldFont>gps</S.BoldFont>
            <S.LongLati>
              <div style={{ display: "flex" }}>
                <S.LongLatiInput placeholder="위도" />
                <S.LongLatiInput placeholder="경도" />
              </div>
            </S.LongLati>
            <S.AddressBox>
              <S.BoldFont>주소</S.BoldFont>
              <S.MailAdressInput value={zipcode} />
              <S.MailAdressInput value={address} />
            </S.AddressBox>
          </S.GPSInfo>
        </S.LoacationBox>
        <div>
          <Button01 title={props.isEdit ? "수정하기" : "등록하기"} isActive={formState.isValid} />
        </div>
      </form>
    </>
  );
}
