import { type ChangeEvent } from "react";
import SearchBarUI from "./SearchBar.presenter";
import _ from "lodash";
import type { ISearchBarProps } from "./SearchBar.types";

export default function SearchBar(props: ISearchBarProps): JSX.Element {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
    props.onChangeKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    // setSearch(event.currentTarget.value);
    getDebounce(event.currentTarget.value);
  };

  return <SearchBarUI onChangeSearch={onChangeSearch} />;
}
