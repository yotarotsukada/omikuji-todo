import { FC } from "react";

type Props = {
  todos: {
    isCompleted: boolean;
  }[];
};
export const TodoIndicator: FC<Props> = ({ todos }) => {
  const count = todos.length;
  const completedCount = todos.filter((t) => t.isCompleted).length;

  return (
    <>
      <p className="text-neutral-400">
        {count === 0 ? (
          <></>
        ) : completedCount === count ? (
          <>All done!</>
        ) : (
          <>
            {completedCount}/{count} completed
          </>
        )}
      </p>
    </>
  );
};
