import React from "react";
import { IMG_CDN_URL } from "../Utils/mockData";

const RestaurantCard = (props) => {
  const resData = props.resData;

  const { name, cloudinaryImageId, sla, costForTwo, avgRating, cuisines } =
    resData?.info;
  return (
    <div className="card">
      <img
        className="restaurantimage"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/200x140";
        }}
      />
      <div className="cardbody">
        <h3>{name}</h3>
        <div className="resinfo">
          <p>{avgRating} stars</p>
          <p>{sla.deliveryTime} mins</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
