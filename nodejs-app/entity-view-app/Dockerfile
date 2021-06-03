FROM quay.io/jeffdean/node-alpine
WORKDIR /opt/app-root/src

COPY package.json /opt/app-root/src
RUN npm install
COPY . /opt/app-root/src/

ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]