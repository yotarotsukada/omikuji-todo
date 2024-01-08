"use server";

import { getClient } from "@/app/_lib/apolloClient";
import { revalidatePath } from "next/cache";
import UpdateTodoMutation from "../graphql/updateTodo.graphql";

export const toggleTodo = async (
  id: string,
  title: string,
  isCompleted: boolean
) => {
  const apolloClient = getClient();
  await apolloClient.mutate({
    mutation: UpdateTodoMutation,
    variables: {
      id,
      title,
      isCompleted,
    },
  });

  revalidatePath("/todo");
};
