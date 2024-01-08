using System.Security.Claims;
using System;
using CsharpBff.Services;

namespace CsharpBff.Types;

public class Query
{
    public Book GetBook() =>
        new Book
        {
            Title = "C# in depth.",
            Author = new Author
            {
                Name = "Jon Skeet"
            }
        };

    public async Task<string> Me(
        ClaimsPrincipal claimsPrincipal,
        [Service] Greeter greeterService
    )
    {
        var userId = claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier);
        Console.WriteLine(userId);

        var message = await greeterService.SayHello("Tsukada");

        return message;
    }

    public async Task<Todo[]> GetTodos([Service] TodoGrpcService todoService)
    {
        // TODO トークンからユーザのIDを解決する
        var userId = "userId";

        var todos = await todoService.GetTodoById(userId);

        return todos;
    }
}
