using CsharpBff.Types;
using Grpc.Core;
using ScalaBackend.Todo;

namespace CsharpBff.Services;

public class TodoGrpcService
{
    public TodoService.TodoServiceClient todoClient;

    public TodoGrpcService()
    {
        var cbr = new ConfigurationBuilder().AddUserSecrets<Program>().Build();
        string grpcServerHost = cbr["GrpcServerHost"];
        int grpcServerPort = int.Parse(cbr["GrpcServerPort"]);

        var channel = new Channel(grpcServerHost, grpcServerPort, ChannelCredentials.Insecure);
        todoClient = new TodoService.TodoServiceClient(channel);
    }

    public async Task<Todo[]> GetTodoById(string id)
    {
        var getTodosReply = await todoClient.GetTodosAsync(
            new GetTodosRequest { }
        );
        var todos = getTodosReply.Data.Todos;
        return todos.Select(t => convertMessage(t)).ToArray();
    }

    public async Task<Todo> CreateTodo(
        string title,
        DateTime dueDate
    )
    {
        var createTodoReply = await todoClient.CreateTodoAsync(
            new CreateTodoRequest
            {
                Title = title,
                DueDate = 1234567
            }
        );
        var createdTodo = createTodoReply.Data.Todo;
        return convertMessage(createdTodo);
    }

    public async Task<Todo> UpdateTodo(
        string id,
        string title,
        DateTime dueDate,
        bool isCompleted
    )
    {
        var updateTodoReply = await todoClient.UpdateTodoAsync(
            new UpdateTodoRequest
            {
                Id = id,
                Title = title,
                DueDate = 1234567,
                IsCompleted = isCompleted
            }
        );
        var updatedTodo = updateTodoReply.Data.Todo;
        return convertMessage(updatedTodo);
    }

    private Todo convertMessage(TodoMessage message) => new Todo
    {
        Id = message.Id,
        Title = message.Title,
        IsCompleted = message.IsCompleted,
        DueDate = new DateTime(2024, 1, 15)
    };
}
