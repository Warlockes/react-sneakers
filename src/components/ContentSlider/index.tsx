import React from "react";
import Slider from "react-slick";

import SliderImage from "../../img/SliderImage.png";
import SliderLogo from "../../img/SliderLogo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ContentSlider.module.scss";

export const ContentSlider = () => {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  //TODO:
  // Сделать кастомные стрелки для слайдера
  // Продолжить верстку

  return (
    <Slider {...settings}>
      {[1, 2, 3, 4].map((_, index) => (
        <div style={{ margin: "0 15px" }} key={index}>
          <div className={styles.slider}>
            <div className={styles.leftSide}>
              <div className={styles.logoContainer}>
                <img src={SliderLogo} />
              </div>
              <div className={styles.description}>
                <p>
                  <span>Stan Smith</span>, Forever!
                </p>
                <button className={styles.sliderBtn}>Купить</button>
              </div>
            </div>
            <div>
              <img src={SliderImage} alt="Slider content" />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
