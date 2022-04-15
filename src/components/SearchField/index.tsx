import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as SearchIcon } from "../../img/icons/Search.svg";
import { setSearchValue } from "../../redux/features/search/searchSlice";
import { selectSearchState } from "../../redux/features/search/selectors";
import styles from "./SearchField.module.scss";

export const SearchField: React.FC = () => {
  const searchBlockRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const { search } = useSelector(selectSearchState);

  const setInputFocus = () => {
    searchBlockRef.current?.classList.add(`${styles.focusedSearch}`);
  };

  const removeInputFocus = () => {
    searchBlockRef.current?.classList.remove(`${styles.focusedSearch}`);
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleChangeSearchValue = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchValue(event.currentTarget.value));
  };

  return (
    <div
      ref={searchBlockRef}
      className={styles.searchBlock}
      onClick={handleFocusInput}
    >
      <SearchIcon />
      <input
        ref={inputRef}
        type="text"
        placeholder="Поиск..."
        value={search}
        onChange={handleChangeSearchValue}
        onFocus={setInputFocus}
        onBlur={removeInputFocus}
      />
    </div>
  );
};
