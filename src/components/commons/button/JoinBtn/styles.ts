import styled from "@emotion/styled";

interface IProps {
  isMobile: boolean;
}

export const BtnC = styled.button`
  width: ${(props: IProps) => (props.isMobile ? "200px" : "80px")};
  background-color: green;
  color: white;
`;
