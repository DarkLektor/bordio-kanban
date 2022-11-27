import React from "react";
import DropdownButton from "./dropdown-button";
import { ButtonComponent, ButtonsWrapper } from "./left.styled";

const dropdown = [
  { text: "Board view", isActive: false },
  { text: "Table view", isActive: false },
  { text: "Kanban", isActive: true },
];

export default function Left() {
  return (
    <ButtonsWrapper>
      <ButtonComponent className="blue">
        <img src="/icons/plus.svg" alt="Add new" />
        <span>Add new</span>
      </ButtonComponent>
      <DropdownButton title="Kanban" childrens={dropdown} />
      <DropdownButton title="Filter" childrens={dropdown} />
    </ButtonsWrapper>
  );
}
