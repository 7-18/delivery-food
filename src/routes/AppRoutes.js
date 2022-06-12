import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { EditAccount } from "../components/EditAccout/EditAccount";
import { LogoHome } from "../components/LogoHome/LogoHome";
import { CreateAccount } from "../components/Register/CreateAccount/CreateAccount";
import { LocationMap } from "../components/Register/Map/Map";
import { Verification } from "../components/Register/Verification/Verification";
import { DetailsPlate } from "../components/Restaurant/Details/DetailsPlate";
import { Restaurant } from "../components/Restaurant/Restaurant";
import { Home } from "../containers/Home/Home";
import { Order } from "../pages/Order/Order";
import { Search } from "../pages/Search/Search";
import { SignIn } from "../pages/Sign-In/SignIn";
import { UserProfile } from "../pages/UserProfile/UserProfile";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoHome />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-in/verification" element={<Verification />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/location-map" element={<LocationMap />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/order" element={<Order />} />
        <Route path="/user-account" element={<UserProfile />} />
        <Route path="/user-account/edit-profile/:id" element={<EditAccount />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/restaurant/:id/plate/:name" element={<DetailsPlate />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
