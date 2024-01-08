using System;
using HotChocolate.Types;

namespace CsharpBff.Types;

public class Todo
{
    [GraphQLType(typeof(IdType)), GraphQLNonNullType]
    public string Id { get; set; }

    public string Title { get; set; }

    public bool IsCompleted { get; set; }

    public DateTime DueDate { get; set; }
}
