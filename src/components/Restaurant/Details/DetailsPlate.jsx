import { HomeDiv } from "../../../containers/Home/HomeStyles";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { ButtonAdd, ButtonPrice, Plate } from "./DetailsPlateStyles";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";
import { useParams } from "react-router-dom";
import React, { useCallback, useContext, useState } from "react";
import { RestaurantContext } from "../../../context/restaurantContext";
import { useRestaurants } from "../../../hooks/useRestaurants";
import { ButtonPrices } from "./ButtonPrices/ButtonPrices";

export const DetailsPlate = () => {
  const { id, name } = useParams();
  const { restaurantsData } = useContext(RestaurantContext);
  const { back } = useRestaurants();
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const plates = restaurantsData
    .filter((restaurant) => restaurant.id == id)
    .map((rest) => {
      return rest.menu.filter((plate) => plate.name === name);
    });

  const increment = useCallback(
    (num) => {
      setCount((c) => c + num);
      setQuantity((q) => q + 1);
    },
    [setCount, setQuantity]
  );

  const decrement = useCallback(
    (num) => {
      setCount((c) => c - num);
      setQuantity((q) => q - 1);
    },
    [setCount, setQuantity]
  );

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      {plates?.map((plate) => {
        const { id, name, description, price, time, image, extra_ingredient } =
          plate[0];
        return (
          <React.Fragment key={id}>
            <Plate style={{ backgroundImage: `url(${image})` }}>
              <MdOutlineArrowBackIos
                style={{ fontSize: "18px", margin: "30px 10px" }}
                onClick={back}
              />
            </Plate>
            <HomeDiv
              style={{
                paddingTop: "30px",
                paddingBottom: "30px",
                height: "100%",
              }}
            >
              <div>
                <h3
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {name}
                  <span
                    style={{
                      fontSize: "14px",
                      paddingRight: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BsClock style={{ marginRight: "5px" }} />
                    <small>{time}</small>
                  </span>
                </h3>
                <p
                  style={{
                    paddingRight: "60px",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  {description}
                </p>
              </div>
              <div>
                <h4 style={{ color: "var(--gray)", fontWeight: "400" }}>
                  Additional ingredients
                </h4>
                <FormGroup>
                  {extra_ingredient?.map((ingredient) => {
                    return (
                      <FormControlLabel
                        key={ingredient.id}
                        control={
                          <Checkbox
                            {...label}
                            sx={{
                              "&.Mui-checked": {
                                color: "var(--yellow)",
                              },
                            }}
                          />
                        }
                        label={ingredient.name}
                      />
                    );
                  })}
                </FormGroup>
              </div>
              <div style={{ display: "flex", padding: "30vh 20px 0 0" }}>
                <ButtonPrices
                  increment={increment}
                  decrement={decrement}
                  price={price}
                  quantity={quantity}
                />
                <div style={{ width: "100%" }}>
                  <ButtonPrice size="large">
                    <span>Add</span>
                    <span>${price + count}</span>
                  </ButtonPrice>
                </div>
              </div>
            </HomeDiv>
          </React.Fragment>
        );
      })}
    </>
  );
};
