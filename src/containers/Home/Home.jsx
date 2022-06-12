import { useEffect, useState } from "react";
import { Navbar } from "../../components/Nav/Navbar";
import { ImLocation } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Deliver, HomeDiv } from "./HomeStyles";
import { Banners } from "../../components/Banners/Banners";
import ButtonsFilters from "../../components/ButtonsFilters/ButtonsFilters";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { categoryFilters } from "../../data/buttons";
import { DivFilter } from "../../components/ButtonsFilters/ButtonsFiltersStyles";
import { useRestaurants } from "../../hooks/useRestaurants";
import { Spinner } from "../../components/Spinner/Spinner";
import { getAllRestaurants } from "../../services/getRestaurants";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { restaurants, loading } = useRestaurants();
  const [category, setCategory] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = (e) => {
    const { id } = e.target;
    const category = categoryFilters.find((item) => item.id == id);
    const BUTTONS = document.querySelectorAll("button");
    if (category.active === false) {
      category.active = true;
      e.target.classList.add("active");
      e.target.classList.remove("disabled");
      BUTTONS.forEach((item) => {
        if (item.id != id) {
          item.classList.remove("active");
          item.classList.add("disabled");
        }
      });
      const filter = restaurants.filter(
        (item) => item.category === e.target.value
      );
      if (e.target.value === "All") {
        getAllRestaurants().then((data) => {
          setCategory(data);
        });
      }
      setCategory(filter);
    } else {
      category.active = false;
      e.target.classList.remove("active");
      e.target.classList.add("disabled");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user]);

  useEffect(() => {
    getAllRestaurants().then((data) => {
      setCategory(data);
    });
  }, [restaurants]);

  return (
    <>
      <HomeDiv style={{ height: "100%" }}>
        <Deliver>
          <div className="icon">
            <ImLocation />
          </div>
          <div className="delivery">
            <span className="deliver">DELIVER TO</span>
            <span>
              {user?.location} <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </Deliver>
        <Banners />
        <DivFilter>
          <span>Restaurants and cafes</span>
          <ButtonsFilters
            category={categoryFilters}
            restaurants={restaurants}
            handleClick={handleClick}
          />
          {loading ? (
            <>
              <Spinner />
            </>
          ) : (
            <>
              {category.map((restaurant) => {
                const { id, name, before, stars, work_time, local, category } =
                  restaurant;
                return (
                  <CardRestaurant
                    key={id}
                    id={id}
                    restaurants={{
                      name,
                      before,
                      stars,
                      work_time,
                      local,
                      category,
                      id,
                    }}
                  />
                );
              })}
            </>
          )}
        </DivFilter>
      </HomeDiv>
      <Navbar active={"active"} />
    </>
  );
};
