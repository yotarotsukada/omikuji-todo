import { NextPage } from "next";
import { getClient } from "../_lib/apolloClient";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import TodosQuery from "./graphql/query.graphql";

export const dynamic = "force-dynamic";

const Page: NextPage = async () => {
  const apolloClient = getClient();
  const { data: todosQueryDate } = await apolloClient.query({
    query: TodosQuery,
  });

  const todos = todosQueryDate.todos.map((t) => ({
    ...t,
    dueDate: new Date(t.dueDate),
  }));

  return (
    <>
      <div className="flex flex-col gap-2 items-center w-screen max-h-screen h-screen overflow-hidden">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Todo</h1>
        </div>
        <div className="flex justify-center flex-1 overflow-auto w-full">
          <div className="w-3/4 max-w-3xl">
            <TodoList todos={todos} />
          </div>
        </div>
        <div className="p-8 w-3/4 max-w-3xl">
          <TodoForm />
        </div>
      </div>
    </>
  );
};

export default Page;
