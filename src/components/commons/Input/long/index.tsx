import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  tag: any;
  register: UseFormRegisterReturn;
  data?: string | undefined;
  defaultValue: any;
}

export default function InputLong(props: IInputProps): JSX.Element {
  return (
    <>
      <div>{props.tag}</div>
      <input style={{ width: "100%" }} {...props.register} defaultValue={props.defaultValue} />
    </>
  );
}
