import { useEffect } from "react";
import { CardRestaurantStyled, MiniDiv } from "./CardRestaurantStyles";
import { useState } from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardRestaurant({restaurants, id}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(restaurants.stars)
  }, [restaurants])
  
  return (
    <>
    <Link to={`/restaurant/${id}`}>
      <CardRestaurantStyled>
        <div className="col-1">
          <img src={restaurants?.local} alt={restaurants?.name} />
        </div>
        <div className="col-2">
          <h3>{restaurants?.name}</h3>
          <p style={{ fontSize: "10px", margin: "5px 0 2px" }}>
            {restaurants?.description}
          </p>
          <MiniDiv>
            <Rating name="read-only" value={value} readOnly size="small" style={{ margin: "0", fontSize: "0.8rem" }}/>
            <small>{restaurants?.distance}</small>
          </MiniDiv>
          <span>{restaurants?.work_time ? "Work time " + restaurants?.work_time : ""}</span>
          <small>
            <b>{restaurants?.before ? "Before you $" + restaurants?.before : ""}</b>
          </small>
        </div>
      </CardRestaurantStyled>
    </Link>
    </>
  );
}
