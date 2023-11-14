import styled from "@emotion/styled";

interface IProps {
  isMobile: boolean;
}

export const ItemCard = styled.div`
  width: 300px;
  width: ${(props: IProps) => (props.isMobile ? "50%" : "100%")};

  border: thick double black;
  height: ${(props: IProps) => (props.isMobile ? "250px" : "400px")};
  cursor: pointer;
`;

export const Wrapper = styled.div``;

export const Name = styled.div`
  font-weight: 600;
`;

export const Contents = styled.div`
  margin: 10px 0px;
  height: 150px;
  background-color: rgba(237, 231, 225, 0.68);
  overflow: auto;
`;
