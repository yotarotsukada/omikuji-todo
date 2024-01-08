"use client";

import { FC, useRef } from "react";
import { submitTodo } from "../actions/submitTodo";

export const TodoForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <div className="w-full">
        <form
          ref={formRef}
          action={async (formData) => {
            await submitTodo(formData);
            formRef.current?.reset();
          }}
        >
          <div className="flex gap-4">
            <input
              type="text"
              name="title"
              className="border px-4 py-2 flex-1"
              placeholder="I'm going to..."
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-sky-500 text-white shadow-md hover:opacity-75 hover:shadow-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
