interface IButtonProps {
  isActive: boolean;
  title: string;
  isEdit?: boolean;
  onClick?: () => void;
}

export default function Button01(props: IButtonProps): JSX.Element {
  return (
    <button
      style={{
        border: "1px solid blue",
        backgroundColor: props.isActive ? "yellow" : "white",
        color: "blue",
        width: "100px",
        height: "50px",
      }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
