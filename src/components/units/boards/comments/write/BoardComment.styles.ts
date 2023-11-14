import styled from "@emotion/styled";
import { Rate } from "antd";

interface IProps {
  isMobile: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0px 100ox;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: ${(props: IProps) => (props.isMobile ? "space-between" : "")};
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 700;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoWrapper = styled.div`
  display: flex;
`;

export const Writer = styled.input`
  width: 180px;
  height: 50px;
`;

export const Password = styled.input`
  width: 180px;
  height: 50px;
  margin-left: 52px;
`;

export const ContentWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SubmitWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
`;

export const SubBtn = styled.button`
  background-color: black;
  color: white;
  width: 90px;
  height: 50px;
  cursor: pointer;
`;

export const Star = styled(Rate)`
  margin-left: ${(props: IProps) => (props.isMobile ? "" : "50px")};
`;
