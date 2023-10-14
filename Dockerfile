FROM node:latest

EXPOSE 3000
WORKDIR /personalPortfoilo
COPY . .
RUN npm install
ENV NFL_TEAM='Giants'
CMD [ "npm","run","dev"]
