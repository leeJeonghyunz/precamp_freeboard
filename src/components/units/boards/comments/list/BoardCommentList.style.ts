import styled from "@emotion/styled";
import { Rate, Modal } from "antd";

export const Wrapper = styled.div`
  margin-top: 40px;
`;

export const Body = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding-bottom: 20px;
`;

export const WrapperTop = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileImages = styled.div`
  border: 1px solid red;
  background-color: red;
  height: 40px;
  width: 40px;
`;

export const FaceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentWrapper = styled.div`
  margin-left: 15px;
`;

export const CommentWrapperTop = styled.div`
  display: flex;
`;

export const WriterName = styled.span`
  font-weight: 700;
`;

export const Rating = styled(Rate)`
  margin-left: 15px;
`;

export const CommentContent = styled.p`
  width: 100%;
`;

export const CreatedAt = styled.span`
  font-size: 16px;
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const DeleteBtn = styled.div`
  margin: 5px;
  cursor: pointer;
`;

export const PasswordModal = styled(Modal)``;
