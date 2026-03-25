import React from "react";
import { IMG_CDN_URL } from "../Utils/mockData";

const RestaurantCard = (props) => {
  const resData = props.resData;

  const {
    name,
    cloudinaryImageId,
    deliveryTime,
    costForTwo,
    avgRating,
    cuisines,
  } = resData;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <div className="cardbody">
        <h3>{name}</h3>
        {/* <p>{cuisines.join(", ")}</p> */}
        <p>{avgRating} stars</p>
        <p>{deliveryTime} mins</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
