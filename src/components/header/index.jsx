import React from "react";
import styled from "styled-components";
import Left from "./left";
import Right from "./right";

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 2px 4px #f0f1f2;
`;

export default function Header() {
  return (
    <HeaderComponent>
      <Left />
      <Right />
    </HeaderComponent>
  );
}
