FROM node:12.10.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci -qy
COPY . .
EXPOSE 82
CMD npm run build && \
    npm run start
