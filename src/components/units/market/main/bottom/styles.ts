import styled from "@emotion/styled";
import { HeartOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const WrapperLeft = styled.div``;

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
`;

export const HeartOutlinedIcon = styled(HeartOutlined)`
  font-size: 25px;
  color: white;
`;
