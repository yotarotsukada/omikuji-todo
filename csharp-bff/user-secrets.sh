#!/bin/bash

dotnet user-secrets set "GrpcServerHost" "127.0.0.1"
dotnet user-secrets set "GrpcServerPort" "8585"
dotnet user-secrets init
