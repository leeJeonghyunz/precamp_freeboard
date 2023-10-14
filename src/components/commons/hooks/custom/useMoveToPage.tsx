import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../../commons/stores";

interface IUseMoveToPageReturn {
  oncLickMoveToPage: (path: string) => () => void;
  visitedPage: string;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const oncLickMoveToPage = (path: string) => () => {
    setVisitedPage(path); // 로그인페이지에서는 set하지 않도록 조건문 작성
    localStorage.setItem("visitedPage", path);
    void router.push(path);
  };

  return {
    visitedPage,
    oncLickMoveToPage,
  };
};
