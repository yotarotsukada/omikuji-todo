"use client";

import { FC, useState } from "react";

const and = (...classNames: string[]) => classNames.join(" ");
const when = (cond: boolean, classNameTrue: string, classNameFalse?: string) =>
  cond ? classNameTrue : classNameFalse ?? "";

type Props = {
  title: string;
  isCompleted: boolean;
  updateTitle: (title: string) => void;
};

export const TodoTitle: FC<Props> = ({ title, isCompleted, updateTitle }) => {
  const [newTitle, setNewTitle] = useState(title);

  return (
    <>
      <input
        value={newTitle}
        disabled={isCompleted}
        onChange={(e) => setNewTitle(e.target.value)}
        onBlur={() => {
          if (newTitle !== "" && newTitle !== title) {
            updateTitle(newTitle);
          }
        }}
        className={and(
          "w-full text-neutral-800",
          when(isCompleted, "line-through text-neutral-400 bg-inherit")
        )}
      />
    </>
  );
};
