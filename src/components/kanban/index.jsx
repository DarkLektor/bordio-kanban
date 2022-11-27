import React, { useState } from "react";
import Column from "./column";
import { TasksList } from "./tasks";
import { KanbanList, KanbanWrapper } from "./kanban.styled";
import CreateBtn from "./create-btn";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Kanban() {
  const [tasksList, setTaskList] = useState(() => new TasksList());
  const dropHandler = (item, statusFrom, statusTo) => {
    removeItem(item, statusFrom);
    pushItem(item, statusTo);
  };

  const pushItem = (item, statusTo) => {
    const key = Object.keys(tasksList).find(
      (item) => tasksList[item].status === statusTo
    );
    setTaskList((state) => ({
      ...state,
      [key]: { ...state[key], items: [...state[key].items, item] },
    }));
  };

  const removeItem = (item, statusFrom) => {
    const key = Object.keys(tasksList).find(
      (item) => tasksList[item].status === statusFrom
    );
    setTaskList((state) => ({
      ...state,
      [key]: {
        ...state[key],
        items: state[key].items.filter((task) => task.id !== item.id),
      },
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <KanbanWrapper>
        <KanbanList>
          {!Object.keys(tasksList).length
            ? "Empty..."
            : Object.keys(tasksList).map((key) => (
                <Column {...tasksList[key]} key={key} onDrop={dropHandler} />
              ))}
          <CreateBtn />
        </KanbanList>
      </KanbanWrapper>
    </DndProvider>
  );
}
