using System.Security.Claims;
using System;
using CsharpBff.Services;

namespace CsharpBff.Types;

public class Mutation
{
    public async Task<Todo> CreateTodo(
        [Service] TodoGrpcService todoService,
        string title,
        DateTime dueDate
    )
    {
        var newTodo = await todoService.CreateTodo(title, dueDate);

        return newTodo;
    }

    public async Task<Todo> UpdateTodo(
        [Service] TodoGrpcService todoService,
        string id,
        string title,
        DateTime dueDate,
        bool isCompleted
    )
    {
        var updatedTodo = await todoService.UpdateTodo(
            id, title, dueDate, isCompleted);

        return updatedTodo;
    }
}
