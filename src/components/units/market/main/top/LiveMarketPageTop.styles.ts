import styled from "@emotion/styled";

interface IProps {
  isMobile: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid red;
  width: 100%;
  flex-wrap: ${(props: IProps) => (props.isMobile ? "wrap" : "")};
`;
