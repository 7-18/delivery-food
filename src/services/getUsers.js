import axios from "axios";

export const getUsers = async () => {
  const url = "https://restaurant-data-api.herokuapp.com/users";
  const response = await axios.get(url);
  return response.data;
};
