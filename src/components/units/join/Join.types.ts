import type { UseFormHandleSubmit, FormState } from "react-hook-form";

export interface IFormData {
  email: string;
  password: string;
  name: string;
}

export interface IJoinUIProps {
  register: any;
  onClickSubmit: (data: IFormData) => void;
  handleSubmit: UseFormHandleSubmit<IFormData, undefined>;
  formState: FormState<IFormData>;
}
