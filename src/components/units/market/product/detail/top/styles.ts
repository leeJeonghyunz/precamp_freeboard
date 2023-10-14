import styled from "@emotion/styled";
import { LinkOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperLeft = styled.div`
  display: flex;
`;

export const ProfileImg = styled.img`
  height: 50px;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  margin-left: 20px;
`;

export const LinkIcon = styled(LinkOutlined)`
  font-size: 25px;
  margin-right: 10px;
  color: gold;
`;

export const GrayLine = styled.div`
  height: 1px;
  width: 100%;
  border: 1px solid gray;
  margin-top: 10px;
`;

export const ButtonDiv = styled.div`
  display: flex;
`;
