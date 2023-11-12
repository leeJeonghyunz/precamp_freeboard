import type { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderProps {
  onClickLogo: () => void;
  onClickLogin: () => void;
  onClickJoin: () => void;
  userName: string;
  onClcikLogout: () => void;
  isMobile: booleanl;
}
