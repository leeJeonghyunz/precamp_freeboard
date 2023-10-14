import type { FormState } from "react-hook-form";

interface IFormData {
  email: string;
  password: string;
}

export interface IMainPageUIProps {
  register: any;
  handleSubmit: any;
  formState: FormState<IFormData>;
  onClickSubmit: (data: IFormData) => void;
}
