FROM node:12.10.0-alpine
WORKDIR '/app'
COPY package*.json ./
RUN npm ci -qy 
COPY . . 

EXPOSE 3000

CMD ["npm", "start"]
