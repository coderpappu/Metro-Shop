import "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import { Link } from "react-router-dom";

const menu = () => {
  var header = document.querySelector(".header");
  let scrollTop = document.querySelector(".scrollTop");
  const scrollTopicnon = () => {
    header.scrollIntoView({ behavior: "smooth" });
    console.log("click");
  };

  // scrollTop.addEventListener("click", scrollTopicnon);
  return (
    <>
      <div className="header w-full h-[100px] flex flex-wrap flex-row items-center  bg-white">
        <div
          onClick={scrollTopicnon}
          className="scrollTop w-[45px] h-40px rounded fixed bottom-[20px] right-[20px] z-[1000] cursor-pointer bg-black text-white py-[10px] px-[8px]"
        >
          <KeyboardDoubleArrowUpOutlinedIcon />
        </div>
        <div className="container xl:w-[1140px] xl:m-auto">
          <div className="container-row xl:flex flex-wrap flex-row justify-between items-center">
            <div className="logo xl:w-[25%]">
              <img
                className="w-[118px]"
                src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/themes/metro/assets/img/logo-dark.png"
                alt="logo"
              />
            </div>
            <div className="menu-section xl:w-[75%] xl:flex flex-wrap flex-row justify-between items-center">
              <div className="menu xl:w-[60%] ">
                <ul className="xl:flex flex-wrap flex-row items-center justify-evenly">
                  <li className="font-josefin">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="font-josefin">
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className="font-josefin">
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li className="font-josefin">
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li className="font-josefin">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="font-josefin">
                    <Link to="/admindash">My Account</Link>
                  </li>
                </ul>
              </div>
              <div className="right-menu xl:w-[40%] xl:flex flex-wrap flex-row  gap-2 justify-end ">
                <span className="search">
                  <a href="">
                    <SearchIcon style={{ fontSize: 35 }} />
                  </a>
                </span>
                <span className="user">
                  <Link to="/account">
                    <PersonOutlineOutlinedIcon style={{ fontSize: 35 }} />
                  </Link>
                </span>
                <span className="wishlist relative mr-2">
                  <Link to="/wishlist">
                    <FavoriteBorderOutlinedIcon style={{ fontSize: 35 }} />{" "}
                    <span className="absolute w-[20px] h-[20px] text-white text-center text-[13px] bg-black rounded-full right-[-9px] top-0 drop-shadow-2xl">
                      0
                    </span>
                  </Link>
                </span>
                <span className="shoper relative">
                  <Link to="/cart">
                    <ShoppingCartOutlinedIcon style={{ fontSize: 35 }} />{" "}
                    <span className="absolute w-[20px] h-[20px] text-white text-center text-[13px] bg-black rounded-full right-[-7px] top-0 drop-shadow-2xl">
                      0
                    </span>
                  </Link>
                </span>
                <div className="money text-[20px] font-medium mt-[7px]">
                  <span>$</span>0.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default menu;
