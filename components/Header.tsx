import React from "react";
import { Menu } from "./Header/menu";
import { FaDog } from "react-icons/fa";
import { McLaren } from "next/font/google";
import 'animate.css';
const mclaren = McLaren({
  weight: "400",
  subsets: ["latin"],
});
function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className={`flex text-4xl ${mclaren.className} animate__animated animate__bounceInLeft`}>
        Find
        <span>
          <FaDog className="text-accent" />
        </span>
        nimal
      </h1>
      <Menu />
    </div>
  );
}

export default Header;
