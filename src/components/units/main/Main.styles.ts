import styled from "@emotion/styled";

interface IProps {
  isMobile: boolean;
}

export const Body = styled.div`
  width: 100%;
  height: 850px;
  background-image: url("images/1600w-JLofAI27pCg.webp");
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: rgba(239, 239, 240, 0.5);
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  opacity: 1;
  height: 70px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ErrMsg = styled.div`
  color: red;
  font-size: 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: ${(props: IProps) => (props.isMobile ? "column" : "row")};
  align-items: ${(props: IProps) => (props.isMobile ? "center" : "")};
  justify-content: space-around;
  width: 300px;
`;
