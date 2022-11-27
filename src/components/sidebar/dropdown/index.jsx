import React, { useState } from "react";
import { DropdownItems, DropdownWrapper } from "./dropdown.styled";

export default function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownWrapper className={isOpen ? "active" : ""}>
      <button onClick={() => setIsOpen((state) => !state)}>
        <img src="/icons/arrow.svg" alt="arrow" />
        <span>{title}</span>
      </button>
      <DropdownItems className={isOpen ? "active" : ""}>
        {items.map((item, index) => (
          <a href={item.link} key={item.text + index}>
            {item.text}
          </a>
        ))}
      </DropdownItems>
    </DropdownWrapper>
  );
}
