import React from "react";
import { useSelector } from "react-redux";

import { ContentSlider } from "../../components/ContentSlider";
import { Card } from "../../components/Card";
import { SearchField } from "../../components/SearchField";
import { ItemsLoader } from "../../components/ItemsLoader";
import {
  selectIsSneakersLoading,
  selectSneakersState,
} from "../../redux/features/sneakers/selectors";
import styles from "./Home.module.scss";
import { selectSearchState } from "../../redux/features/search/selectors";

export const Home: React.FC = () => {
  const { items } = useSelector(selectSneakersState);
  const { search } = useSelector(selectSearchState);
  const isLoading = useSelector(selectIsSneakersLoading);
  const cleanedSearch = search.trim();
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(cleanedSearch.toLowerCase())
  );

  return (
    <>
      <ContentSlider />
      <div className={styles.contentHead}>
        <h2>
          {cleanedSearch
            ? `Поиск по запросу: ${cleanedSearch}`
            : "Все кроссовки"}
        </h2>
        <SearchField />
      </div>
      <div className={styles.productList}>
        {isLoading ? (
          <ItemsLoader />
        ) : (
          <>
            {filteredItems.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
