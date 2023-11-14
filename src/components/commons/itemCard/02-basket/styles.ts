import { HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px;
  display: flex;
  border: 1px solid black;
  margin-top: 5px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 250px;
  margin-right: 20px;
`;

export const Wrapper2 = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(237, 231, 225, 0.68);
`;

export const Wrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

export const isMobileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(237, 231, 225, 0.68);
`;
