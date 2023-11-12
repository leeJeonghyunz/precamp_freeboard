import styled from "@emotion/styled";
import type { ISubmitButtonProps } from "../../../units/main/Main.types";

interface IProps {
  isMobile: boolean;
  isActive: boolean;
}

export const BtnA = styled.button`
  width: ${(props: IProps) => (props.isMobile ? "200px" : "80px")};
  background-color: ${(props: ISubmitButtonProps) => (props.isActive ? "yellow" : "")};
`;
