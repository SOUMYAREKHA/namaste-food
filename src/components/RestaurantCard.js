import React from 'react'

const RestaurantCard = (props) => {
  const resData = props.resData

  const {name,cloudinaryImageId,deliveryTime,costForTwo,avgRating,cuisines} = resData
  return (
    <div className='card'>
      <img src={cloudinaryImageId} alt={name} />
      <div className='cardbody'>
        <h3 >{name}</h3>
        {/* <p>{cuisines.join(", ")}</p> */}
        <p>{avgRating} stars</p>
       <p>{deliveryTime} mins</p>
      <p>{costForTwo}</p>
      </div>
      
      
    </div>
  )
}

export default RestaurantCard
