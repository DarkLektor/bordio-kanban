import styled from "styled-components";

export const Aside = styled.aside`
  background: var(--sidebar-main);
  padding-top: 25px;
  display: flex;
  flex-direction: column;
`;
export const Link = styled.a`
  display: inline-block;
  margin-bottom: 25px;
`;
export const Logo = styled.img`
  height: 32px;
  object-fit: contain;
  object-position: left;
  margin-left: 16px;
`;
export const SearchWrapper = styled.div`
  position: relative;
  margin: 0 16px 19px;
`;
export const SearchInput = styled.input`
  width: 190px;
  background: var(--sidebar-secondary);
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 9px;
  color: var(--gray);
`;
export const SearchImg = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 8px;
  top: 8px;
`;
export const WorkspaceBtn = styled.button`
  background: var(--sidebar-secondary);
  display: flex;
  align-items: center;
  color: #fff;
  padding: 6px 16px;
  cursor: pointer;
  img {
    width: 22px;
    height: 22px;
    border-radius: 100%;
    margin-right: 8px;
  }
`;
