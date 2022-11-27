import React from "react";
import Task from "../task";
import { ColumnStyle, TasksWrapper, Title } from "./column.styled";
import { useDrop } from "react-dnd";

export default function Column({ title, items = [], status, onDrop }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "div",
    drop: ({ item, statusFrom }) => onDrop(item, statusFrom, status),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  return (
    <ColumnStyle>
      <Title length={items.length}>{title}</Title>
      <TasksWrapper ref={dropRef}>
        {!items.length
          ? "Empty..."
          : items.map((item) => (
              <Task item={item} key={item.id} status={status} />
            ))}
      </TasksWrapper>
    </ColumnStyle>
  );
}
