FROM node:latest

EXPOSE 3000
WORKDIR /portfoilo
COPY . .
RUN npm install
ENV NFL_TEAM='Giants'
CMD [ "npm","run","dev"]
#docker build -t portfolio_image -f ./Dockerfile .
#docker run -p 3000:3000 --name portfolio --mount type=bind,source="$(pwd)",target=/portfoilo portfolio_image
