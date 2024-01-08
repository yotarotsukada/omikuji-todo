import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type * as Schema from "../../_generated/schema.js";

type UpdateTodoResult = Schema.__SelectionSet<Schema.Mutation, {
  updateTodo: Schema.__SelectionSet<Schema.Todo, {
    id: Schema.ID;
    title: Schema.String;
    isCompleted: Schema.Boolean;
    dueDate: Schema.DateTime;
  }, {}>;
}, {}>;

type UpdateTodoVariables = {
  readonly id: Schema.String;
  readonly title: Schema.String;
  readonly isCompleted: Schema.Boolean;
};

declare const UpdateTodoMutation: TypedDocumentNode<UpdateTodoResult, UpdateTodoVariables>;

export { UpdateTodoMutation as default };


//# sourceMappingURL=updateTodo.d.graphql.ts.map
