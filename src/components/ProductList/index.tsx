import React from "react";
import classNames from "classnames";

import { ReactComponent as PlusIcon } from "../../img/icons/Plus.svg";
import { ReactComponent as AddedIcon } from "../../img/icons/Added.svg";
import { ReactComponent as FavoritesIcon } from "../../img/icons/Favorites.svg";
import { ReactComponent as FavoriteAddIcon } from "../../img/icons/FavoriteAdd.svg";
import { SneakersItem } from "../../redux/features/sneakers/sneakersSlice";
import { ItemsLoader } from "../ItemsLoader";
import styles from "./ProductList.module.scss";

interface ProductListProps {
  items: SneakersItem[];
  loading?: boolean;
}

export const ProductList: React.FC<ProductListProps> = ({ items, loading }) => {
  return (
    <div className={styles.productList}>
      {loading ? (
        <ItemsLoader />
      ) : (
        <>
          {items.map(({ imageUrl, price, title, id }) => (
            <div key={id} className={styles.productCard}>
              <div className={classNames("btn", styles.favoritesBtn)}>
                <FavoritesIcon width={14.5} />
              </div>
              <div className={classNames("btn", styles.favoriteAdded)}>
                <FavoriteAddIcon width={14.5} />
              </div>
              <div className={styles.cardImageContainer}>
                <img src={imageUrl} alt="Product" />
              </div>
              <p className={styles.description}>{title}</p>
              <div className={styles.cardFooter}>
                <div>
                  <p>Цена:</p>
                  <p>{price} руб.</p>
                </div>
                <div className={classNames(styles.addButton, "btn")}>
                  <PlusIcon />
                </div>
                <div className={classNames(styles.addedProduct, "btn")}>
                  <AddedIcon />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
