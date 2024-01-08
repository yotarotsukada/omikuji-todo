import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type * as Schema from "../../_generated/schema.js";

type TodosResult = Schema.__SelectionSet<Schema.Query, {
  todos: (Schema.__SelectionSet<Schema.Todo, {
    id: Schema.ID;
    title: Schema.String;
    isCompleted: Schema.Boolean;
    dueDate: Schema.DateTime;
  }, {}>)[];
}, {}>;

type TodosVariables = {};

declare const TodosQuery: TypedDocumentNode<TodosResult, TodosVariables>;

export { TodosQuery as default };


//# sourceMappingURL=query.d.graphql.ts.map
