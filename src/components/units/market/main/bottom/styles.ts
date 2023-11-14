import styled from "@emotion/styled";
import { HeartOutlined } from "@ant-design/icons";

interface IProps {
  isMobile: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  width: ${(props: IProps) => (props.isMobile ? "100%" : "110%")};
`;

export const WrapperLeft = styled.div`
  margin: 5px 0px;
  width: 100%;
`;

export const WrapperRight = styled.div`
  width: 200px;
  height: 500px;
  top: 100px;
  left: 1300px;
  position: sticky;
`;

export const basket = styled.div`
  margin-top: 20px;
  height: 50px;
  width: 50px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeartOutlinedIcon = styled(HeartOutlined)`
  font-size: 25px;
  color: black;
`;
