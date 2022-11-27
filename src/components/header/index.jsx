import React from "react";
import styled from "styled-components";
import Left from "./left";

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <HeaderComponent>
      <Left />
    </HeaderComponent>
  );
}
