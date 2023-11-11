import type { IQuery } from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export interface IBoardDetailUIProps {
  data: Pick<IQuery, "fetchBoard">;
  onClickMoveList: () => void;
  onClickMoveEdit: () => void;
  onClickDelete: () => void;
  onClickLike: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDisLike: (event: MouseEvent<HTMLDivElement>) => void;
}
