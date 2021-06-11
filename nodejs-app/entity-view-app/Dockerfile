FROM node:8.16.1-alpine
WORKDIR /root/airtel_redirect
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD [ "node", "server.js" ]
