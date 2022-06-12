import axios from "axios";

const url = "https://restaurant-data-api.herokuapp.com/restaurants";
export const getAllRestaurants = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const getRestaurantById = async (id) => {
  const response = await axios.get(url);
  return response.data;
};

export const getRestaurantByName = async (name) => {
  const response = await axios.get(url);
  const data = response.data;
  return data.find((restaurant) => restaurant.name === name);
};
