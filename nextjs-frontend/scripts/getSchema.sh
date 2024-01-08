#!/bin/bash

ENDPOINT="http://localhost:5100/graphql?sdl"

curl $ENDPOINT \
--output ./schema/schema.graphql
