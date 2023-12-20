FROM node:latest
EXPOSE 3000
WORKDIR /site
COPY . .
RUN npm install
CMD [ "npm","run","dev"]