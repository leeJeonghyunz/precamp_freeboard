import * as S from "./SearchBar.styles";
import type { ISearchBarUIProps } from "./SearchBar.types";

export default function SearchBarUI(props: ISearchBarUIProps): JSX.Element {
  return (
    <>
      <S.SearchBar
        placeholder="제목검색"
        type="text"
        onChange={props.onChange}
      />
    </>
  );
}
