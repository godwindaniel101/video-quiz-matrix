FROM node:12.10.0

WORKDIR /app-base

COPY package*.json ./

RUN npm ci -qy 

COPY . .

ARG CLIENT_PORT
ENV CLIENT_PORT=$CLIENT_PORT

EXPOSE $CLIENT_PORT

CMD ["npm", "start"]
