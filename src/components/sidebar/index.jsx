import React from "react";
import Dropdown from "./dropdown";
import {
  Aside,
  Link,
  Logo,
  SearchImg,
  SearchInput,
  SearchWrapper,
  WorkspaceBtn,
} from "./sidebar.styled";

const fav = {
  title: "Favorites",
  items: [
    { link: "#", text: "Marketing" },
    { link: "#", text: "Mobile App" },
  ],
};
const projects = {
  title: "My Projects",
  items: [
    { link: "#", text: "Marketing" },
    { link: "#", text: "Landing Pages" },
    { link: "#", text: "Wedding" },
    { link: "#", text: "Mobile App" },
    { link: "#", text: "House export Construction" },
  ],
};

export default function Sidebar() {
  return (
    <Aside>
      <Link href="/">
        <Logo src="/img/bordio-logo.svg" />
      </Link>

      <SearchWrapper>
        <SearchInput type="text" placeholder="Search..." />
        <SearchImg src="/icons/search.svg" />
      </SearchWrapper>

      <WorkspaceBtn>
        <img src="/img/user.jpg" alt="user" />
        <span>My workspace</span>
      </WorkspaceBtn>

      <Dropdown {...fav} />
      <Dropdown {...projects} />
    </Aside>
  );
}
