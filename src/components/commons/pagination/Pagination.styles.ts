import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}

export const Wrapper = styled.div``;

export const Page = styled.span`
  margin: 5px;
  cursor: pointer;
  color: ${(props: IPageProps) => (props.isActive ? "pink" : "black")};
`;
