import styled from "@emotion/styled";

interface IProps {
  isMobile: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
`;

export const Table = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 0px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px 40px;
  font-size: ${(props: IProps) => (props.isMobile ? "12px" : "16px")};
  align-items: center;
  border-bottom: 1px solid grey;
`;

export const Number = styled.div`
  width: 8%;
`;

export const Title = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Writer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;

export const CreatedAt = styled.div`
  display: flex;
  justify-content: center;
  width: 27%;
`;

export const Footer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const RegisterBtn = styled.button`
  height: 50px;
  width: 170px;
  background-color: white;
  cursor: pointer;
`;
