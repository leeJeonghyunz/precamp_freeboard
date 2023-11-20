import styled from "@emotion/styled";


export const Wrapper = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Btn = styled.button`
  width: 100px;
  height: 50px;
  background-color: gold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
