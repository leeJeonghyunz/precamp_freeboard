import { HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 200px;
  width: 1000px;
  border-bottom: 1px solid green;
  padding: 10px;
  display: flex;
`;

export const Detail = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-right: 20px;
`;

export const Wrapper2 = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(237, 231, 225, 0.68);
  padding: 10px;
  font-weight: 600;
`;

export const Wrapper3 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
`;

export const BasketBtn = styled.button`
  width: 130px;
  height: 30px;
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
