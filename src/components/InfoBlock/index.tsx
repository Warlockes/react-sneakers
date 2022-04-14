import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as OrderIcon } from "../../img/icons/Order.svg";
import { toggleCartVisible } from "../../redux/features/cart/cartSlice";
import styles from "./InfoBlock.module.scss";

interface InfoBlockProps {
  title: string;
  imageSrc: string;
  description: string;
  isOrder?: boolean;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  imageSrc,
  isOrder,
  description,
}) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleGoHomePage = () => {
    if (pathname !== "/") {
      return navigate("/");
    }

    dispatch(toggleCartVisible());
  };

  return (
    <div className={styles.infoCartContainer}>
      <div
        className={classNames(styles.imageContainer, {
          [`${styles.smallImageContainer}`]: pathname !== "/",
        })}
      >
        <img src={imageSrc} alt="Info" />
      </div>
      <h2 className={classNames({ [`${styles.orderTitle}`]: isOrder })}>
        {title}
      </h2>
      <p>{description}</p>
      <div
        className={classNames("cartBtn", styles.cartBackBtn)}
        onClick={handleGoHomePage}
      >
        <OrderIcon height={12} />
        <span>Вернуться назад</span>
      </div>
    </div>
  );
};
