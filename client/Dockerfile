FROM node:12.10.0-alpine
WORKDIR '/app'
COPY package*.json ./
RUN npm ci -qy 
COPY . . 
RUN npm run build

FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html