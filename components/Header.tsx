import React from "react";
import { Menu } from "./Header/menu";
import { Input } from "./ui/input";
function Header() {
  return (
    <div className="flex justify-end">
      <Menu />
    </div>
  );
}

export default Header;
