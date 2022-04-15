import React from "react";
import classNames from "classnames";

import { ReactComponent as PlusIcon } from "../../img/icons/Plus.svg";
import { ReactComponent as AddedIcon } from "../../img/icons/Added.svg";
import { ReactComponent as FavoritesIcon } from "../../img/icons/Favorites.svg";
import { ReactComponent as FavoriteAddIcon } from "../../img/icons/FavoriteAdd.svg";
import { SneakersItem } from "../../redux/features/sneakers/sneakersSlice";
import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";

interface CardProps {
  item: SneakersItem;
  added?: boolean;
  favorite?: boolean;
}

export const Card: React.FC<CardProps> = ({ item, favorite, added }) => {
  const dispatch = useDispatch();
  const { imageUrl, price, title } = item;

  return (
    <div className={styles.productCard}>
      {favorite ? (
        <div className={classNames("btn", styles.favoriteAdded)}>
          <FavoriteAddIcon width={14.5} />
        </div>
      ) : (
        <div className={classNames("btn", styles.favoritesBtn)}>
          <FavoritesIcon width={14.5} />
        </div>
      )}
      <div className={styles.cardImageContainer}>
        <img src={imageUrl} alt="Product" />
      </div>
      <p className={styles.description}>{title}</p>
      <div className={styles.cardFooter}>
        <div>
          <p>Цена:</p>
          <p>{price} руб.</p>
        </div>
        {added ? (
          <div className={classNames(styles.addedProduct, "btn")}>
            <AddedIcon />
          </div>
        ) : (
          <div className={classNames(styles.addButton, "btn")}>
            <PlusIcon />
          </div>
        )}
      </div>
    </div>
  );
};
