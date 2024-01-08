"use server";

import { getClient } from "@/app/_lib/apolloClient";
import { revalidatePath } from "next/cache";
import UpdateTodoMutation from "../graphql/updateTodo.graphql";

export const updateTodoTitle = async (
  id: string,
  isCompleted: boolean,
  title: string
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
