import { IFormData } from "../../../units/market/product/register/body/ProductRegisterBody.index";

interface IButtonProps {
  isActive: boolean;
  title: string;
  onClickSubmit: (data: IFormData) => void;
}

export default function Button01(props: IButtonProps): JSX.Element {
  return (
    <button
      style={{ backgroundColor: props.isActive ? "yellow" : "" }}
      onClick={props.onClickSubmit}
    >
      {props.title}
    </button>
  );
}
