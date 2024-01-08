using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace CsharpBff;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        var signingKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes("MySuperSecretKey"));

        services
            .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters =
                    new TokenValidationParameters
                    {
                        ValidIssuer = "https://auth.chillicream.com",
                        ValidAudience = "https://graphql.chillicream.com",
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = signingKey
                    };
            });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseRouting();

        app.UseAuthentication();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapGraphQL()
            .RequireAuthorization();
        });
    }
}
