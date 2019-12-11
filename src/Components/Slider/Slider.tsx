import React, { useState, useEffect, useCallback } from "react";
import "./Slider.css";

interface SliderProps {
  imgArray: Array<string>;
}
export const Slider = (props: SliderProps) => {
  const { imgArray } = props;
  const [imgCounter, setImgCounter] = useState(0);

  const changeImage = (e: any) => {
    setImgCounter(e.target.id);
  };
  return (
    <>
      <div className="wrapper wrapper_comp_slider">
        <div
          className="slider__image"
          style={{
            backgroundImage: `url(${imgArray[imgCounter]})`
          }}
        ></div>
        <div className="slider__option">
          {imgArray.map((el, index) => {
            return (
              <>
                <div
                  onClick={changeImage}
                  className="button button_comp_slider"
                  id={`${index}`}
                ></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
