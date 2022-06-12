import { useEffect } from "react";
import { useState } from "react";
import { getAllRestaurants } from "../services/getRestaurants";
import { useNavigate } from "react-router-dom";

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllRestaurants()
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return { restaurants, loading, setRestaurants, back };
};
