import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURENT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestraurants, setListOfRestraurant] = useState([]);
  const [filteredRestraurant, setFilteredRestraurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURENT_API);
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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks Like you are offline!! Please check your Internet Connection
      </h1>
    );

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
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Search Input Functionality
              console.log(searchText);
              const filteredRestraurant = listOfRestraurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(filteredRestraurant);
              setFilteredRestraurant(filteredRestraurant);
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
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
