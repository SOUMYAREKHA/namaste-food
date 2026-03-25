import React, { useEffect,useState } from 'react';
import Header from './Header';
import RestaurantCard from './RestaurantCard';


const Body = () => {
  const[resData,setResData] = useState([])

   useEffect(()=>{
    fetchData()
   })

   const fetchData = async()=>{
    const data = await fetch(" https://namastedev.com/api/v1/listRestaurants")
    const json = await data.json()

   
    console.log(json);
   }
  return (
    <div className='body'>
      <Header/>
      <RestaurantCard resData={resData}/>
    </div>
  )
}

export default Body
