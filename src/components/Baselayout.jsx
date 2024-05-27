import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import HomePage from "../pages/public/homepage/HomePage";

function BaseLayout() {
  return (
    <>
      <Navigation/>
      <Outlet/>
      <HomePage/>
      <Footer/>
    </>
  );
}

export default BaseLayout;
