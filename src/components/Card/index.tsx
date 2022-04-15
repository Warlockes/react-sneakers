import React from "react";
import classNames from "classnames";

import { ReactComponent as PlusIcon } from "../../img/icons/Plus.svg";
import { ReactComponent as AddedIcon } from "../../img/icons/Added.svg";
import { ReactComponent as FavoritesIcon } from "../../img/icons/Favorites.svg";
import { ReactComponent as FavoriteAddIcon } from "../../img/icons/FavoriteAdd.svg";
import {
  fetchAddCartItem,
  fetchAddFavoriteItem,
  fetchDeleteCartItem,
  fetchDeleteFavoriteItem,
  SneakersItem,
} from "../../redux/features/sneakers/sneakersSlice";
import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";

interface CardProps {
  item: SneakersItem;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, price, title, added2Cart, added2Favorites } = item;

  const handleAddCartItem = () => {
    dispatch(fetchAddCartItem(item));
  };

  const handleDeleteCartItem = () => {
    dispatch(fetchDeleteCartItem(item));
  };

  const handleAddFavoriteItem = () => {
    dispatch(fetchAddFavoriteItem(item));
  };

  const handleDeleteFavoriteItem = () => {
    dispatch(fetchDeleteFavoriteItem(item));
  };

  return (
    <div className={styles.productCard}>
      {added2Favorites ? (
        <div
          className={classNames("btn", styles.favoriteAdded)}
          onClick={handleDeleteFavoriteItem}
        >
          <FavoriteAddIcon width={14.5} />
        </div>
      ) : (
        <div
          className={classNames("btn", styles.favoritesBtn)}
          onClick={handleAddFavoriteItem}
        >
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
        {added2Cart ? (
          <div
            className={classNames(styles.addedProduct, "btn")}
            onClick={handleDeleteCartItem}
          >
            <AddedIcon />
          </div>
        ) : (
          <div
            className={classNames(styles.addButton, "btn")}
            onClick={handleAddCartItem}
          >
            <PlusIcon />
          </div>
        )}
      </div>
    </div>
  );
};
