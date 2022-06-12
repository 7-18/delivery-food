import React from "react";
import { Navbar } from "../../components/Nav/Navbar";
import { HomeDiv } from "../../containers/Home/HomeStyles";
import pardes_logo from "../../assets/images/pardes-logo.png";
import { OrderName, OrdersDiv, ThisOrderDiv } from "./OrderStyles";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export function Order() {
  return (
    <>
      <HomeDiv style={{ padding: "30px 20px", height: "90vh" }}>
        <OrdersDiv>
          <h3>All orders</h3>
          <ThisOrderDiv>
            <div className="col-1">
              <img src={pardes_logo} alt="" />
            </div>
            <div className="col-2">
              <OrderName>
                Pardes restaurant <small>Delivered <MdOutlineArrowForwardIos /></small>
              </OrderName>
              <span>$ 132.00</span>
            </div>
          </ThisOrderDiv>
        </OrdersDiv>
      </HomeDiv>
      <Navbar />
    </>
  );
}
