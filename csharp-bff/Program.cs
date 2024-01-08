using CsharpBff.Types;
using CsharpBff.Services;

class Program
{
    static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddSingleton<Greeter>();
        builder.Services.AddSingleton<TodoGrpcService>();

        builder.Services
            .AddGraphQLServer()
            .AddAuthorization()
            .AddQueryType<Query>()
            .AddMutationType<Mutation>();

        var app = builder.Build();

        app.MapGraphQL();

        app.Run();
    }
}
