import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextArrow, PrevArrow } from "./Arrows";
import SliderImage from "../../img/SliderImage.png";
import SliderLogo from "../../img/SliderLogo.png";
import styles from "./ContentSlider.module.scss";

export const ContentSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index}>
          <div className={styles.slider}>
            <div className={styles.leftSide}>
              <div className={styles.logoContainer}>
                <img src={SliderLogo} alt="Logo" />
              </div>
              <div className={styles.description}>
                <p>
                  <span>Stan Smith,</span>Forever!
                </p>
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={styles.sliderBtn}>Купить</button>
                </a>
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
