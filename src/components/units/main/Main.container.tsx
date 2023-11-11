import MainPageUI from "./Main.presenter";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../commons/validation/Main";
import {
  accessTokenState,
  accessTokenUserName,
  isLoginState,
} from "../../../commons/stores";
import { useMutationLoginUser } from "../../commons/hooks/mutations/useMutaitonLoginUser";
import { FETCH_USER_LOGGED_IN } from "./Main.queries";

interface IFormData {
  email: string;
  password: string;
}

export default function MainPage(): JSX.Element {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setIsLogin] = useRecoilState(isLoginState);
  const [loginUser] = useMutationLoginUser();
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
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
      refetchQueries: [
        {
          query: FETCH_USER_LOGGED_IN,
        },
      ],
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

  const onClickNonMember = () => {
    void router.push("/boards/list");
  };

  const onClickJoin = () => {
    void router.push("/join");
  };

  return (
    <MainPageUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickNonMember={onClickNonMember}
      onClickJoin={onClickJoin}
    />
  );
}

// <button type="button" onClick={onClickBasket}>장바구니 담기</button>
// <button type="reset">지우자</button>
// <button type="submit">제출하자</button> //기본값
