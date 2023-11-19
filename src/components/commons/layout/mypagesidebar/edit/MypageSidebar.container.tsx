import { ChangeEvent, useState } from "react";
import EditUserUI from "./MypageSidebar.presenter";
import { UPDATE_USER } from "../../../hooks/mutations/useMutationUpdateUser";
import { IUpdateUserInput } from "../../../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function EditUser(): JSX.Element {
  const router = useRouter();
  const [image, setImage] = useState([""]);
  const [name, setName] = useState("");

  const [updateUser] = useMutation<Pick<IMutation, "updateUser">, IMutationUpdateBoardArgs>(UPDATE_USER);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const onChangeImage = (image1: string, index: number): void => {
    const newImage = [...image];
    newImage[index] = image1;
    setImage(newImage);
    console.log(image);
  };

  const onClickEdit = async () => {
    const updateUserInput: IUpdateUserInput = {};
    if (name !== "") updateUserInput.name = name;
    if (image.some((item) => item !== "")) {
      updateUserInput.picture = [...image];
    }

    const result = await updateUser({
      variables: {
        updateUserInput,
      },
    });
    console.log(result);
    void router.push("mypage");
  };

  return (
    <EditUserUI image={image} onChangeImage={onChangeImage} onClickEdit={onClickEdit} onChangeName={onChangeName} />
  );
}
