import styled from "@emotion/styled";

interface IProps {
  isMobile: boolean;
}

export const Body = styled.div`
  width: 100%;
  height: 800px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props: IProps) => (props.isMobile ? "column" : "row")};
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  background-color: ${(props: IProps) => (props.isMobile ? "pink" : "orange")};
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${(props: IProps) => (props.isMobile ? "green" : "blue")};
`;
