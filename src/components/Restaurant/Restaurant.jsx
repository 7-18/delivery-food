import { HomeDiv } from "../../containers/Home/HomeStyles";
import { MdOutlineArrowBackIos } from "react-icons/md";
import CardRestaurant from "../CardRestaurant/CardRestaurant";
import ButtonsFilters from "../ButtonsFilters/ButtonsFilters";
import { LogoRestaurant, PlateCard, PlatesDiv } from "./RestaurantStyles";
import { useParams, Link } from "react-router-dom";
import React, { useContext  } from "react";
import { RestaurantContext } from "../../context/restaurantContext";
import { useRestaurants } from "../../hooks/useRestaurants";

export const Restaurant = () => {
  const { id } = useParams();
  const { restaurantsData } = useContext(RestaurantContext);
  const { back } = useRestaurants();

  const restaurant = restaurantsData.filter(
    (restaurant) => restaurant.id == id
  );

  return (
    <>
      {restaurant?.map((rest) => {
        const { id, name, description, local, stars, distance, logo, menu } =
          rest;
        return (
          <HomeDiv
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              height: "100%",
            }}
            key={id}
          >
            <MdOutlineArrowBackIos
              style={{ fontSize: "18px" }}
              onClick={back}
            />
            <LogoRestaurant style={{ textAlign: "center" }}>
              <img src={logo} alt={name} />
            </LogoRestaurant>
            <CardRestaurant
              restaurants={{
                name,
                description,
                local,
                stars,
                distance,
              }}
              id={id}
            />
            <ButtonsFilters menu={menu} />
            <PlatesDiv>
              {menu?.map((plate) => {
                const { name, description, price, image, category } = plate;
                return (
                  <React.Fragment key={plate.id}>
                    <Link to={`/restaurant/${id}/plate/${name}`}>
                      <PlateCard>
                        <img src={image} alt={name} />
                        <h4 style={{ margin: "5px 0 0" }}>{name}</h4>
                        <span
                          style={{
                            fontSize: "16px",
                            color: "var(--gray)",
                            fontWeight: "400",
                          }}
                          >
                          $ {price}
                        </span>
                      </PlateCard>
                    </Link>
                  </React.Fragment>
                );
              })}
            </PlatesDiv>
          </HomeDiv>
        );
      })}
    </>
  );
};
