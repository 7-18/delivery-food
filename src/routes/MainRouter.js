import { useEffect } from "react";
import { useState } from "react";
import { RestaurantContext } from "../context/restaurantContext";
import { getAllRestaurants } from "../services/getRestaurants";
import { AppRoutes } from "./AppRoutes";

export const MainRouter = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    getAllRestaurants().then((data) => {
      setRestaurantsData(data);
    });
  }, []);

  return (
    <>
      <RestaurantContext.Provider
        value={{ restaurantsData, setRestaurantsData }}
      >
        <AppRoutes />
      </RestaurantContext.Provider>
    </>
  );
};
