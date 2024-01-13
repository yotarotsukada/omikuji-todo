using Grpc.Core;
using Helloworld;

namespace CsharpBff.Services;

public class Greeter
{
    private GreeterService.GreeterServiceClient greeterClient;

    public Greeter()
    {
        var cbr = new ConfigurationBuilder().AddUserSecrets<Program>().Build();
        string grpcServerHost = cbr["GrpcServerHost"];
        int grpcServerPort = int.Parse(cbr["GrpcServerPort"]);

        var channel = new Channel(grpcServerHost, grpcServerPort, ChannelCredentials.Insecure);
        greeterClient = new GreeterService.GreeterServiceClient(channel);
    }

    public async Task<string> SayHello()
    {
        var reply = await greeterClient.SayHelloAsync(new HelloRequest
        {
            Name = "Yotaro"
        });
        return reply.Message;
    }

    public async Task<string> SayHello(string name)
    {
        var reply = await greeterClient.SayHelloAsync(new HelloRequest
        {
            Name = name
        });
        return reply.Message;
    }
}
