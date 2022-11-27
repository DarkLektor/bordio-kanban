import React, { useState } from "react";
import {
  ButtonComponent,
  ButtonWrapper,
  ChildButton,
  ChildWrapper,
} from "./dropdown-button.styled";

export default function DropdownButton({ title, childrens = [] }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <ButtonWrapper>
      <ButtonComponent
        onClick={() => setOpenDropdown((state) => !state)}
        className={openDropdown ? "active" : ""}>
        <span>{title}</span>
        <img src="/icons/arrow-black.svg" alt="arrow" />
      </ButtonComponent>
      {childrens.length && openDropdown ? (
        <ChildWrapper>
          {childrens.map((item, index) => (
            <ChildButton
              key={item.text + index}
              onClick={() => setOpenDropdown(false)}
              className={item.isActive ? "active" : ""}>
              {item.text}
            </ChildButton>
          ))}
        </ChildWrapper>
      ) : (
        ""
      )}
    </ButtonWrapper>
  );
}
