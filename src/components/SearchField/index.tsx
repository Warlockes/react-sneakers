import React, { useRef } from "react";

import { ReactComponent as SearchIcon } from "../../img/icons/Search.svg";
import styles from "./SearchField.module.scss";

export const SearchField = () => {
  const searchBlockRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const setInputFocus = () => {
    searchBlockRef.current?.classList.add(`${styles.focusedSearch}`);
  };

  const removeInputFocus = () => {
    searchBlockRef.current?.classList.remove(`${styles.focusedSearch}`);
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
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
        onFocus={setInputFocus}
        onBlur={removeInputFocus}
      />
    </div>
  );
};
