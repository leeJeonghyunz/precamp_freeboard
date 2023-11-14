import { useMediaQuery } from "react-responsive";
import * as S from "./SearchBar.styles";
import type { ISearchBarUIProps } from "./SearchBar.types";

export default function SearchBarUI(props: ISearchBarUIProps): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });

  return (
    <>
      <S.SearchBar isMobile={isMobile} placeholder="제목검색" type="text" onChange={props.onChange} />
    </>
  );
}
