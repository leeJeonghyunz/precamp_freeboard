import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export const PicDiv = styled.div`
  height: 118px;
`;

export const Picture = styled.div`
  display: flex;
  width: 282px;
  justify-content: space-between;
  border: 1px solid blue;
`;

export const LoacationBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Map = styled.div`
  width: 380px;
  height: 250px;
  margin-top: 20px;
`;

export const GPSInfo = styled.div`
  margin-left: 20px;
`;

export const LongLati = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const LongLatiInput = styled.input`
  width: 110px;
  height: 50px;
  border: 1px solid black;
  margin-right: 20px;
`;

export const AddressBox = styled.div`
  margin-top: 20px;
`;

export const MailAdressInput = styled.input`
  width: 600px;
  height: 50px;
  margin-top: 20px;
`;

export const BoldFont = styled.span`
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.div`
  margin-top: 10px;
`;

export const ModalAddress = styled(Modal)``;

export const ModalAddressInput = styled(DaumPostcodeEmbed)``;
