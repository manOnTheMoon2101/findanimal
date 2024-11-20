import React from "react";
import { Menu } from "./Header/menu";
import { Input } from "./ui/input";
function Header() {
  return (
    <div className="flex justify-between">
      <Input placeholder="Search" className="w-1/5 border-accent"/>
      <Menu />
    </div>
  );
}

export default Header;
