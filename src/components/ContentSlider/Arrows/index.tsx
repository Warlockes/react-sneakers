import React from "react";
import classNames from "classnames";

import NextArrowIcon from "../../../img/icons/NextArrow.svg";
import styles from "./Arrows.module.scss";

export const NextArrow: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  onClick,
  className,
}) => {
  return (
    <div
      className={classNames(className, styles.arrow, styles.nextArrow)}
      onClick={onClick}
    >
      <div>
        <img src={NextArrowIcon} alt="Next" />
      </div>
    </div>
  );
};

export const PrevArrow: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  onClick,
  className,
}) => {
  return (
    <div
      className={classNames(className, styles.arrow, styles.prevArrow)}
      onClick={onClick}
    >
      <div>
        <img src={NextArrowIcon} alt="Prev" />
      </div>
    </div>
  );
};
