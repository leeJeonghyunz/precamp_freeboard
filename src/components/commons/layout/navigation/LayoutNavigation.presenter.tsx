import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavigation.style";
import type { ILayoutNavigationUIProps } from "./LayoutNavigation.types";
import { useMediaQuery } from "react-responsive";

const NAVIGATION_MENUS = [
  { name: "라이브게시판", page: "/boards/list" },
  { name: "라이브상품", page: "/markets" },
  { name: "마이페이지", page: "/mypage" },
  { name: "강아지사진", page: "/hmm" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });
  return (
    <Wrapper isMobile={isMobile}>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
