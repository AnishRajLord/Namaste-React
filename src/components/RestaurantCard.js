import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-64 h-88 bg-gray-100 shadow-lg rounded-lg flex flex-col justify-between hover:bg-gray-200">
      <img
        className="rounded-lg w-56 h-32 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="flex-grow">
        <h3 className="font-bold py-4 text-lg truncate" title={name}>{name}</h3>
        <h4 className="font-medium py-1 truncate" title={cuisines.join(", ")}>{cuisines.join(", ")}</h4>
        <h4 className="font-medium py-1" title={avgRating}>{avgRating}</h4>
        <h4 className="font-medium py-1" title={costForTwo}>{costForTwo}</h4>
        <h4 className="font-medium py-1" title={sla?.slaString}>{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
