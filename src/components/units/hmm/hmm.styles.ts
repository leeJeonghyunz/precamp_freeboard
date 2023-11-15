import styled from "@emotion/styled";

interface IProps {
  isMobile: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props: IProps) => (props.isMobile ? "column" : "row")};
`;

export const Dog = styled.img`
  height: 500px;
  width: ${(props: IProps) => (props.isMobile ? "100%" : "500px")};
`;

export const ButtonDiv = styled.div`
  width: 100%;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: ${(props: IProps) => (props.isMobile ? "" : "center")};
`;

export const ResetBtn = styled.button`
  width: ${(props: IProps) => (props.isMobile ? "100%" : "250px")};
  height: ${(props: IProps) => (props.isMobile ? "50px%" : "250px")};
  border-radius: ${(props: IProps) => (props.isMobile ? "%" : "50%")};
  background-color: red;
  color: white;
  cursor: pointer;
`;
