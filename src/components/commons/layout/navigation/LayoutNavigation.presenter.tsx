import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavigation.style";
import type { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
  { name: "라이브게시판", page: "/boards/list" },
  { name: "라이브상품", page: "/markets" },
  { name: "마이페이지", page: "/mypage" },
  { name: "강아지사진", page: "/hmm" },
  { name: "파이어베이스", page: "/myfirebase" },
];

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps,
): JSX.Element {
  return (
    <Wrapper>
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
