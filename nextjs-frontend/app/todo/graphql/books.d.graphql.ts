import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type * as Schema from "../../_generated/schema.js";

type BookResult = Schema.__SelectionSet<Schema.Query, {
  book: Schema.__SelectionSet<Schema.Book, {
    title: Schema.String;
    author: Schema.__SelectionSet<Schema.Author, {
      name: Schema.String;
    }, {}>;
  }, {}>;
}, {}>;

type BookVariables = {};

declare const BookQuery: TypedDocumentNode<BookResult, BookVariables>;

export { BookQuery as default };


//# sourceMappingURL=books.d.graphql.ts.map
