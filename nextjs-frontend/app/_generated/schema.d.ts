export type __nitrogql_schema = {
  query: Query;
  mutation: Mutation;
};

type __Beautify<Obj> = { [K in keyof Obj]: Obj[K] } & {};
export type __SelectionSet<Orig, Obj, Others> =
  __Beautify<Pick<{
    [K in keyof Orig]: Obj extends { [P in K]?: infer V } ? V : unknown
  }, Extract<keyof Orig, keyof Obj>> & Others>;






export type Int = number;

export type Float = number;

export type String = string;

export type Boolean = boolean;

export type ID = string;

/**
 * The `DateTime` scalar represents an ISO-8601 compliant date time type.
 */
export type DateTime = string;

export type Author = {
  __typename: "Author";
  name: String;
};

export type Book = {
  __typename: "Book";
  title: String;
  author: Author;
};

export type Mutation = {
  __typename: "Mutation";
  createTodo: Todo;
  updateTodo: Todo;
};

export type Query = {
  __typename: "Query";
  book: Book;
  me: String;
  todos: (Todo)[];
};

export type Todo = {
  __typename: "Todo";
  id: ID;
  title: String;
  isCompleted: Boolean;
  dueDate: DateTime;
};

export type ApplyPolicy = "BEFORE_RESOLVER" | "AFTER_RESOLVER" | "VALIDATION";


//# sourceMappingURL=schema.d.ts.map
