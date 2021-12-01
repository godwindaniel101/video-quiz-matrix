FROM node:10-alpine as base
ENV NODE_ENV=production

EXPOSE 8081

WORKDIR '/app'
COPY package*.json ./
RUN npm install --only=production \    && npm cache clean --force
COPY . . 
RUN npm run build

FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html