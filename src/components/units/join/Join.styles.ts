import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;

export const Title = styled.span`
  font-size: 50px;
  font-weight: 600;
  color: gold;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
`;

export const ErrMsg = styled.div`
  color: red;
  font-size: 10px;
`;

export const ProfileImgWrapper = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid black;
`;

export const ProfileImg = styled.img`
  height: 50px;
  width: 50px;
`;
