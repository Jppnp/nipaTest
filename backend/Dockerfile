FROM node:18.17.0-alpine

WORKDIR /usr/app

COPY package*.json .

RUN npm cache clean --force && \
    npm install -g npm@latest && \
    npm install

COPY . .
EXPOSE 9000
CMD [ "npm", "run", "dev" ]