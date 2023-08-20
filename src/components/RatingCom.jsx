import React, { useEffect } from "react";
import { Rating, initTE } from "tw-elements";

const RatingCom = () => {
  useEffect(() => {
    initTE({ Rating });

    const icon = document.querySelectorAll("[data-te-rating-icon-ref]");

    const handleHover = (e) => {
      console.log("onHover", e);
    };

    const handleSelect = (e) => {
      console.log("onSelect", e);
    };

    icon.forEach((el) => {
      el.addEventListener("onHover.te.rating", handleHover);
      el.addEventListener("onSelect.te.rating", handleSelect);
    });

    return () => {
      icon.forEach((el) => {
        el.removeEventListener("onHover.te.rating", handleHover);
        el.removeEventListener("onSelect.te.rating", handleSelect);
      });
    };
  }, []);

  return (
    <div>
      <Rating data-te-rating-icon-ref="rating1" />
      <Rating data-te-rating-icon-ref="rating2" />
      {/* Add more Rating components as needed */}
    </div>
  );
};

export default RatingCom;
