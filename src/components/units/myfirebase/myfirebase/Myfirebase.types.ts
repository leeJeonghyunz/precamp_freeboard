import { useEffect, useState, type MouseEvent } from "react";

export interface IMyFirebaseUIProps {
  dataBoards: any;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}
