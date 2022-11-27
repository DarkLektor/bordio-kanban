import React from "react";
import Left from "./left";
import Right from "./right";
import { HeaderComponent } from "./header.styled";

export default function Header() {
  return (
    <HeaderComponent>
      <Left />
      <Right />
    </HeaderComponent>
  );
}
