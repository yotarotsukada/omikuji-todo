import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type * as Schema from "../../_generated/schema.js";

type CreateTodoResult = Schema.__SelectionSet<Schema.Mutation, {
  createTodo: Schema.__SelectionSet<Schema.Todo, {
    id: Schema.ID;
    title: Schema.String;
    isCompleted: Schema.Boolean;
    dueDate: Schema.DateTime;
  }, {}>;
}, {}>;

type CreateTodoVariables = {
  readonly title: Schema.String;
};

declare const CreateTodoMutation: TypedDocumentNode<CreateTodoResult, CreateTodoVariables>;

export { CreateTodoMutation as default };


//# sourceMappingURL=createTodo.d.graphql.ts.map
