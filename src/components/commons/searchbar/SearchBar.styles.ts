import styled from "@emotion/styled";

interface IProps {
  isMobile: boolean;
}

export const SearchBar = styled.input`
  margin: 10px;
  width: ${(props: IProps) => (props.isMobile ? "100%" : "50%")};
  height: 30px;
`;

export const SearchBtn = styled.button``;
