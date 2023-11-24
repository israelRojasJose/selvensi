#!/bin/bash

docker build -t portfolio_image:latest -f ./Dockerfile .
docker run -p 3000:3000 --name portfolio --mount type=bind,source="$(pwd)",target=/portfoilo --cpus=1 --memory=1g portfolio_image:latest