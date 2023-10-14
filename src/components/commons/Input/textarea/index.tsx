import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  tag: any;
  register: UseFormRegisterReturn;
  data: string | any;
}

export default function Textarea01(props: IInputProps): JSX.Element {
  return (
    <>
      <div>{props.tag}</div>
      <textarea
        style={{ width: "100%", height: "300px" }}
        {...props.register}
        defaultValue={props.data}
      />
    </>
  );
}
