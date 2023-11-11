import styled from "@emotion/styled";
import type { ISubmitButtonProps } from "../../../units/main/Main.types";

export const BtnA = styled.button`
  width: 90px;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "yellow" : ""};
`;
