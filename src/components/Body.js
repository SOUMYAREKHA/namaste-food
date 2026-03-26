import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data1 = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data1.json();
    const { data } = json;
    setResData(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
  };
  console.log(resData);
  return (
    <div className="body">
      {resData.map((restaurant) => (
        <RestaurantCard resData={restaurant} key={restaurant.info.id} />
      ))}
    </div>
  );
};

export default Body;
