import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("이메일을입력하시오").email("이메일 형식이 아님"),
  password: yup.string().required("비밀번호입력하시오").min(4, "최소 4자리").max(15, "최대 15"),
});

export const JoinSchema = yup.object({
  email: yup.string().required("이메일을입력하시오").email("이메일 형식이 아님"),
  password: yup.string().required("비밀번호입력하시오").min(4, "최소 4자리").max(15, "최대 15"),
  name: yup.string().required("이름을 입력하시오"),
  picture: yup.string(),
});

export const productRegisterSchema = yup.object({
  name: yup.string().required("상품명을 입력하시오"),
  remarks: yup.string().required("요약을 입력하시오"),
  contents: yup.string().required("상품설명을 입력하시오"),
  price: yup.number().required("가격을 입력하시오"),
});
