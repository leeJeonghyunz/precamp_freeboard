import styled from "@emotion/styled";
import type { ISubmitButtonProps } from "./BoardWrite.type";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 1200px;
  padding: 100px 5px;
  margin-left: 150px;
`;

export const BodyWrapped = styled.div``;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: center;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 92px;
  margin: 10px 0px;
`;
export const IdPw = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const InputIdPw = styled.div`
  display: flex;
  flex-direction: column;
  width: 486px;
`;

export const Input = styled.input`
  width: 99%;
`;

export const Content = styled.div`
  width: 996px;
  height: 520px;
`;

export const ContentInput = styled.textarea`
  height: 480px;
  width: 996px;
`;
export const PostCode = styled.input`
  width: 77px;
  height: 52px;
`;

export const PostDiv = styled.div`
  margin-top: 20px;
  height: 242px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostDiv2 = styled.div`
  display: flex;
`;

export const SearchBtn = styled.button`
  background-color: black;
  color: white;
  margin-left: 15px;
  cursor: pointer;
`;

export const PostInput = styled.input`
  height: 52px;
`;

export const YoutubeBox = styled.div`
  height: 80px;
`;

export const YoutubeInput = styled.input`
  height: 45px;
  width: 100%;
`;

export const PicDiv = styled.div`
  height: 118px;
`;

export const PicDiv2 = styled.div`
  display: flex;
  width: 282px;
  justify-content: space-between;
`;

export const UpdateBtn = styled.button`
  height: 75px;
  width: 75px;
  cursor: pointer;
`;

export const ImageUploadInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  width: 50px;
  height: 50px;
`;

export const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckBoxLabel = styled.div`
  display: flex;
  accent-color: #ffd600;
`;

export const Save = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  cursor: pointer;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "yellow" : ""};
`;

export const Error = styled.div`
  color: red;
  font-size: 10px;
`;

export const ModalAddress = styled(Modal)``;

export const ModalAddressInput = styled(DaumPostcodeEmbed)``;
