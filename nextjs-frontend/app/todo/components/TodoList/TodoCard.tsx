"use client";

import { FC } from "react";
import { toggleTodo } from "../../actions/toggleTodo";
import { updateTodoTitle } from "../../actions/updateTodoTitle";
import { TodoTitle } from "./TodoTitle";

export type TodoProps = {
  id: string;
  title: string;
  isCompleted: boolean;
  dueDate: Date;
};

type Props = TodoProps & {};

const date2str = (date: Date) => date.toISOString().slice(0, 10);

export const TodoCard: FC<Props> = ({ id, title, isCompleted, dueDate }) => {
  const handleToggleTodo = toggleTodo.bind(null, id, title);
  const handleUpdateTodoTitle = updateTodoTitle.bind(null, id, isCompleted);

  return (
    <>
      <div className="w-full flex justify-between border-b px-6 py-2 items-center">
        <div className="flex flex-1 gap-6 items-center">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => handleToggleTodo(e.target.checked)}
            className="w-4 h-4"
          />
          <div className="flex flex-col flex-1 gap-1">
            <TodoTitle
              title={title}
              isCompleted={isCompleted}
              updateTitle={handleUpdateTodoTitle}
            />
            {/* <span className="text-neutral-400 text-xs">
              {date2str(dueDate)}
            </span> */}
          </div>
        </div>
        {/* <div className="border rounded-full w-4 h-4 flex justify-center items-center">
          <span className="text-neutral-400 text-xs">ℹ︎</span>
        </div> */}
      </div>
    </>
  );
};
