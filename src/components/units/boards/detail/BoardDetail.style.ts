import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined, LinkOutlined, SendOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";
import { Modal } from "antd";

interface IProps {
  isMobile: boolean;
}

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SmallWord = styled.span`
  font-weight: 400;
  font-size: 12px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 100px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 5px gray;
  padding: ${(props: IProps) => (props.isMobile ? "20px 0" : "20px 100px")};
`;

export const WrapperTop = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  border-bottom: solid 1px #bdbdbd;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(161, 162, 163, 0.5);
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px;
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Icon = styled.div`
  display: flex;
`;

export const ProfilePhoto = styled.div`
  width: 56px;
  height: 56px;
  background-color: gray;
`;
export const InfoBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
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

export const Title = styled.h4`
  color: black;
`;

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-item: center;
`;

export const Image = styled.img`
  max-width: 50%;
  max-height: 400px;
`;

export const Contents = styled.p`
  margin-top: 40px;
`;

export const WrapperBottom = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const YoutubeBpx = styled.div`
  width: 100%;
  border: 1px solid blue;
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
