import * as S from "./stye";

interface IButtonProps {
  isActive?: boolean;
  title: string;
  onClick: () => void;
}

export default function Button02(props: IButtonProps): JSX.Element {
  return (
    <S.Btn onClick={props.onClick} style={{ backgroundColor: props.isActive ? "yellow" : "" }}>
      {props.title}
    </S.Btn>
  );
}
