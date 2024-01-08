"use server";

import { getClient } from "@/app/_lib/apolloClient";
import { revalidatePath } from "next/cache";
import CreateTodoMutation from "../graphql/createTodo.graphql";

export const submitTodo = async (data: FormData) => {
  const title = String(data.get("title"));
  if (!title) {
    return;
  }

  const apolloClient = getClient();
  await apolloClient.mutate({
    mutation: CreateTodoMutation,
    variables: {
      title,
    },
  });

  revalidatePath("/todo");
};
