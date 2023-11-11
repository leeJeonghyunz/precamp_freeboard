import type { MouseEvent } from "react";
import type { FormState } from "react-hook-form";

export interface IFormData {
  email: string;
  password: string;
}

export interface IMainPageUIProps {
  register: any;
  handleSubmit: any;
  formState: FormState<IFormData>;
  onClickSubmit: (data: IFormData) => void;
  onClickNonMember: () => void;
  onClickJoin: () => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
