import { FC } from "react";
import { TodoCard, TodoProps } from "./TodoCard";
import { TodoIndicator } from "./TodoIndicator";

type Props = {
  todos: TodoProps[];
};

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <>
      <div className="flex justify-end">
        <TodoIndicator todos={todos} />
      </div>
      <div>
        {todos.map((t, i) => (
          <TodoCard key={t.id + i} {...t} />
        ))}
      </div>
    </>
  );
};
