import classNames from "classnames";
import React from "react";

import NextArrowIcon from "../../../img/icons/NextArrow.svg";
import styles from "./Arrows.module.scss";

export const NextArrow = (props: React.HTMLProps<HTMLDivElement>) => {
  const { onClick, className } = props;

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

export const PrevArrow = (props: React.HTMLProps<HTMLDivElement>) => {
  const { onClick, className } = props;

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
