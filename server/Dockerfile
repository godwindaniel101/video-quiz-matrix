FROM node:12.10.0-alpine

WORKDIR /app-base

COPY package*.json ./
RUN npm ci -qy

COPY . .

EXPOSE 8082

CMD ["npm", "start"]
