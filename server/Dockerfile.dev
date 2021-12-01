FROM node:12.10.0-alpine

WORKDIR /app-base

COPY package*.json ./
RUN npm ci -qy

COPY . .

ARG SERVER_PORT
ENV SERVER_PORT=$SERVER_PORT

EXPOSE $SERVER_PORT

CMD ["npm", "start"]
