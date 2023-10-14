import type { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderProps {
  onClickLogo: () => void;
  onClickLogin: () => void;
  onClickJoin: () => void;
  data: Pick<IQuery, "fetchUserLoggedIn">;
  dataName: string;
}
