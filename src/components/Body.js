import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const Body = () => {
  //Local State Varibale
  // const [listOfRestraurants, setListOfRestraurant] = useState([
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId: "ldtibwymvzehvmdwl8la",
  //       cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
  //       costForTwo: 20000,
  //       deliveryTime: 31,
  //       avgRating: "4.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334476",
  //       name: "Dominos",
  //       cloudinaryImageId: "ldtibwymvzehvmdwl8la",
  //       cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
  //       costForTwo: 20000,
  //       deliveryTime: 35,
  //       avgRating: "3.9",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334479",
  //       name: "MCD",
  //       cloudinaryImageId: "ldtibwymvzehvmdwl8la",
  //       cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
  //       costForTwo: 20000,
  //       deliveryTime: 35,
  //       avgRating: "4.2",
  //     },
  //   },
  // ]);

  //Normal JS Variable

  // let listOfRestraurantsJS = [
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId: "ldtibwymvzehvmdwl8la",
  //       cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
  //       costForTwo: 20000,
  //       deliveryTime: 31,
  //       avgRating: "4.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334476",
  //       name: "Dominos",
  //       cloudinaryImageId: "ldtibwymvzehvmdwl8la",
  //       cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
  //       costForTwo: 20000,
  //       deliveryTime: 35,
  //       avgRating: "3.9",
  //     },
  //   },
  // ];

  const [listOfRestraurants, setListOfRestraurant] = useState([]);
  const [filteredRestraurant, setFilteredRestraurant] = useState([])
  const [searchText, setSearchText] = useState("");

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2942254&lng=85.744396&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      //console.log( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
      //Optional Chaining
      setListOfRestraurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestraurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //Conditional Rendering
  return listOfRestraurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            onClick={() => {
              // Search Input Functionality
              console.log(searchText)
              const filteredRestraurant = listOfRestraurants.filter((res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              // console.log(filteredRestraurant);
              setFilteredRestraurant(filteredRestraurant)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            const filteredList = listOfRestraurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraurant(filteredList);
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {filteredRestraurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
