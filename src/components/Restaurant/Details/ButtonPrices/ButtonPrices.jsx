import { memo } from "react";
import { ButtonAdd } from "../DetailsPlateStyles";

export const ButtonPrices = memo (({ increment, decrement, price, quantity }) => {
  return (
    <div style={{ marginRight: "10px", width: "100%" }}>
      <ButtonAdd size="large">
        <span onClick={() => decrement(price)}>-</span>
        <span>{quantity}</span>
        <span onClick={() => increment(price)}>+</span>
      </ButtonAdd>
    </div>
  );
});
