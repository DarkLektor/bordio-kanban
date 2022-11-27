import React, { useMemo } from "react";
import { TaskStyle } from "./task.styled";
import { useDrag } from "react-dnd";

export default function Task({ item, status }) {
  const isCompleted = useMemo(() => {
    return status === "complete";
  }, [status]);

  const [{ isDragging }, dragRef] = useDrag(() => {
    return {
      type: "div",
      item: { item, statusFrom: status },
      collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
    };
  }, []);

  return (
    <TaskStyle color={item.color} isCompleted={isCompleted} ref={dragRef}>
      <p>{item.text}</p>
      <span>{item.time}</span>
    </TaskStyle>
  );
}
