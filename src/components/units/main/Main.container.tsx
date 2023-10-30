import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../commons/validation/Main";
import MainPageUI from "./Main.presenter";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoginState } from "../../../commons/stores";
import { useMutationLoginUser } from "../../commons/hooks/mutations/useMutaitonLoginUser";

interface IFormData {
  email: string;
  password: string;
}

export default function MainPage(): JSX.Element {
  const [, setIsLogin] = useRecoilState(isLoginState);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUserExample] = useMutationLoginUser();
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
    void login(data);
  };

  const login = async (data: IFormData): Promise<void> => {
    const result = await loginUserExample({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;
    if (accessToken === undefined) {
      alert("로그인실패");
      return;
    }
    setAccessToken(accessToken);
    // localStorage.setItem("accessToken", accessToken); // 임시저장
    console.log(accessToken);
    setIsLogin(true);
    void router.push("/boards/list");
  };
  return (
    <MainPageUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}

// <button type="button" onClick={onClickBasket}>장바구니 담기</button>
// <button type="reset">지우자</button>
// <button type="submit">제출하자</button> //기본값
