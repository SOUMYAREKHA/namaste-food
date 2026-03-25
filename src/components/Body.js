import React, { useEffect, useState } from "react";
import Header from "./Header";
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

    console.log(json);
  };
  return (
    <div className="body">
      <Header />
      <RestaurantCard resData={resData} />
    </div>
  );
};

export default Body;
