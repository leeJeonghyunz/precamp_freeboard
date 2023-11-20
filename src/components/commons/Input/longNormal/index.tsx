interface IInputProps {
  tag: any;
}

export default function InputLongNormal(props: IInputProps): JSX.Element {
  return (
    <>
      <div>{props.tag}</div>
      <input style={{ width: "100%" }} />
    </>
  );
}
