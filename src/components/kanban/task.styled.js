import styled from "styled-components";

export const TaskStyle = styled.div`
  padding: 15px;
  background: ${({ color, isCompleted }) =>
    isCompleted ? "var(--card-gray)" : `var(--card-${color})`};
  border-radius: 8px;
  cursor: grab;
  color: ${({ isCompleted }) => (isCompleted ? "var(--gray)" : "var(--black)")};
  p {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 2px;
    text-decoration: ${({ isCompleted }) =>
      isCompleted ? "line-through" : "none"};
  span {
    font-size: 13px;
    line-height: 15px;
    color: #435e52;
  }
`;
