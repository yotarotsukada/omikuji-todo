import type { GraphQLResolveInfo } from "graphql";
import type * as Schema from "./schema.js";
type __Resolver<Parent, Args, Context, Result> = (parent: Parent, args: Args, context: Context, info: GraphQLResolveInfo) => Result | Promise<Result>;
type __TypeResolver<Obj, Context, Result> = (object: Obj, context: Context, info: GraphQLResolveInfo) => Result | Promise<Result>;
type Int = Schema.Int;
type Float = Schema.Float;
type String = Schema.String;
type Boolean = Schema.Boolean;
type ID = Schema.ID;
type DateTime = Schema.DateTime;
type Author = Omit<Schema.Author, "__typename">;
type Book = Omit<Schema.Book, "__typename">;
type Mutation = Omit<Schema.Mutation, "__typename">;
type Query = Omit<Schema.Query, "__typename">;
type Todo = Omit<Schema.Todo, "__typename">;
type ApplyPolicy = Schema.ApplyPolicy;
export type Resolvers<Context> = {
  Author: {
    name: __Resolver<Author, {}, Context, String>;
  };
  Book: {
    title: __Resolver<Book, {}, Context, String>;
    author: __Resolver<Book, {}, Context, Author>;
  };
  Mutation: {
    createTodo: __Resolver<Mutation, {
      readonly title: String;
      readonly dueDate: DateTime;
    }, Context, Todo>;
    updateTodo: __Resolver<Mutation, {
      readonly id: String;
      readonly title: String;
      readonly dueDate: DateTime;
      readonly isCompleted: Boolean;
    }, Context, Todo>;
  };
  Query: {
    book: __Resolver<Query, {}, Context, Book>;
    me: __Resolver<Query, {}, Context, String>;
    todos: __Resolver<Query, {}, Context, (Todo)[]>;
  };
  Todo: {
    id: __Resolver<Todo, {}, Context, ID>;
    title: __Resolver<Todo, {}, Context, String>;
    isCompleted: __Resolver<Todo, {}, Context, Boolean>;
    dueDate: __Resolver<Todo, {}, Context, DateTime>;
  };
};
export type ResolverOutput<T extends "Int" | "Float" | "String" | "Boolean" | "ID" | "DateTime" | "Author" | "Book" | "Mutation" | "Query" | "Todo" | "ApplyPolicy"> = 
{
  Int: Int;
  Float: Float;
  String: String;
  Boolean: Boolean;
  ID: ID;
  DateTime: DateTime;
  Author: Author;
  Book: Book;
  Mutation: Mutation;
  Query: Query;
  Todo: Todo;
  ApplyPolicy: ApplyPolicy;
}[T];

//# sourceMappingURL=resolvers.d.ts.map
