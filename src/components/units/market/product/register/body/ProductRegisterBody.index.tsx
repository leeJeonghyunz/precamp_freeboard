import * as S from "./styles";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../../../commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { productRegisterSchema } from "../../../../../commons/validation/Main";
import InputLong from "../../../../../commons/Input/long";
import Textarea01 from "../../../../../commons/Input/textarea";
import Button01 from "../../../../../commons/button/01";
import InputLongNormal from "../../../../../commons/Input/longNormal";
import { useRouter } from "next/router";
import ImageUpload01 from "../../../../../commons/imageUpload/imageUpload";
import { useMutationCreateUsedItem } from "../../../../../commons/hooks/mutations/useMutationCreateUsedItem";
import { useQueryFetchUsedItem } from "../../../../../commons/hooks/queries/useQueryFetchUsedItem";
import { useMutationUpdateUsedItem } from "../../../../../commons/hooks/mutations/useMutationUpdateUsedItem";
import { useState } from "react";
import { Address } from "react-daum-postcode";
import { add } from "lodash";
import KakaoMapPage from "../../../../../commons/maps/02-address";
import { ReactQuill } from "../../../../../commons/react-quill";
import "react-quill/dist/quill.snow.css";

export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  images: string[];
}

export default function ProductRegisterBody(): JSX.Element {
  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IFormData>({
      resolver: yupResolver(productRegisterSchema),
      mode: "onChange",
    });

  const router = useRouter();
  const [createUseditem] = useMutationCreateUsedItem();
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>): void => {
    setZipcode(event.target.value);
    if (event.target.value !== "") {
      setZipCodeError("");
    }
  };

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    console.log(data);
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: data.price,
          images: data.images,
          useditemAddress: {
            zipcode,
            address,
          },
        },
      },
    });
    const { Modal } = await import("antd"); // code-spliting
    Modal.success({ content: "완료!!!~~" });
    console.log(result);
    void router.push(
      `/markets/product/${String(result.data?.createUseditem._id)}`,
    );
  };

  const onCompleteSearchAddress = (data: Address): void => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsOpen((prev) => !prev);
    console.log(data);
  };

  const onClickSearchAddress = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const onChangeImages = (event: any): void => {
    console.log(event.target.value);
  };

  // const onClickEdit = (data: IFormData) => {
  //   const updateUseditemInput: IUpdateUseditemInput = {};
  //   if (data.name !== "") updateUseditemInput.name = data.name;
  //   if (data.remarks !== "") updateUseditemInput.remarks = data.remarks;
  //   if (data.contents !== "") updateUseditemInput.contents = data.contents;
  //   if (data.price !== null) updateUseditemInput.price = data.price;
  //   if (data.images.length > 0) updateUseditemInput.images = data.images;
  //   const result = await updateUseditem({
  //     variables: {
  //       updateUseditemInput,
  //       useditemId: String(router.query.number),
  //     },
  //   });
  //   console.log(result);
  // };

  const aa = () => {
    console.log(zipcode);
    console.log(address);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      <InputLong register={register("name")} tag="상품명" />
      <div>{formState.errors.name?.message}</div>
      <InputLong register={register("remarks")} tag="한줄요약" />
      <div>{formState.errors.remarks?.message}</div>
      <S.Contents>
        <span>내용</span>
        <ReactQuill onChange={onChangeContents} />
      </S.Contents>
      <InputLong register={register("price")} tag="판매가격" />
      <div>{formState.errors.price?.message}</div>
      <InputLongNormal tag="태그입력" />
      <div>
        <p>사진첨부</p>
        <ImageUpload01
          setValue={setValue}
          register={register("images")}
          onChange={onChangeImages}
        />
      </div>
      <S.LoacationBox>
        <div>
          {isOpen && (
            <S.ModalAddress
              open={isOpen}
              onOk={onClickSearchAddress}
              onCancel={onClickSearchAddress}
            >
              <S.ModalAddressInput onComplete={onCompleteSearchAddress} />
            </S.ModalAddress>
          )}
          <S.BoldFont>거래 위치</S.BoldFont>
          <S.Map>
            <KakaoMapPage address={address} width={"380px"} height={"250px"} />
          </S.Map>
          <div onClick={onClickSearchAddress}>검색</div>
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

      <button onClick={aa}> 테스트</button>
      <Button01
        title="등록하기"
        isActive={formState.isValid}
        onClick={onClickSubmit}
      />
    </form>
  );
}
