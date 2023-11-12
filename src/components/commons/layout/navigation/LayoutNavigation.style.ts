import styled from "@emotion/styled";

interface IProps {
  isMobile: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: ${(props: IProps) => (props.isMobile ? "130px" : "64px")};
  background-color: #5729ff;
  display: flex;
  flex-direction: ${(props: IProps) => (props.isMobile ? "column" : "row")};
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: orange;
  }
`;
