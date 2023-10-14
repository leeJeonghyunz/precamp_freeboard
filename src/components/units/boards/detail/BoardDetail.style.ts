import styled from "@emotion/styled";
import {
  LikeOutlined,
  DislikeOutlined,
  LinkOutlined,
  SendOutlined,
} from "@ant-design/icons";
import ReactPlayer from "react-player";

export const Body = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 100px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 1200px;
  box-shadow: 5px 5px 5px gray;
`;
export const WrapperTop = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 30px;
  border-bottom: solid 1px #bdbdbd;
`;
export const Info = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const ProfilePhoto = styled.div`
  width: 56px;
  height: 56px;
  background-color: gray;
`;
export const InfoBody = styled.div`
  margin-left: 10px;
`;

export const Icon = styled.div`
  display: flex;
`;

export const LinkIcon = styled(LinkOutlined)`
  font-size: 20px;
  margin-right: 10px;
`;

export const LocationIcon = styled(SendOutlined)`
  font-size: 20px;
`;

export const WrapperContents = styled.div`
  margin-top: 80px;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 480px;
`;

export const Contents = styled.p`
  margin-top: 40px;
`;

export const WrapperBottom = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const LikeWrapped = styled.div`
  margin-top: 120px;
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

export const LikeBtnWrapped = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeBtn = styled(LikeOutlined)`
  font-size: 40px;
`;

export const DisLikeBtn = styled(DislikeOutlined)`
  font-size: 40px;
`;

export const Footer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const FooterBtn = styled.button`
  background-color: white;
  height: 50px;
  width: 180px;
  margin: 0px 10px;
  border-color: rgba(128, 128, 128, 0.5);
  cursor: pointer;
`;
