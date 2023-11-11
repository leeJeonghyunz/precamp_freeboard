import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import JoinUI from "./Join.presenter";
import { JoinSchema } from "../../commons/validation/Main";
import type { IFormData } from "./Join.types";
import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUserArgs,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import { CREATE_USER } from "./Join.queries";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { checkValidatonFile } from "../../commons/libraries/validationFiles";
import { UPLOAD_FILE } from "../../commons/hooks/mutations/useMutationUploadFile";

export default function Join(): JSX.Element {
  const router = useRouter();
  const [profileImg, setProfileImg] = useState("");
  const [createUserInput] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(JoinSchema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    console.log(data);
    await createUserInput({
      variables: {
        createUserInput: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });
    alert("가입이 완료되었습니다.");
    void router.push("/main");
  };
  return (
    <JoinUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}
