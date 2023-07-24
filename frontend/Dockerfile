FROM node:18.17.0-alpine

WORKDIR /usr/app

COPY package*.json /usr/app/

RUN npm i

COPY . .

EXPOSE 3030

CMD [ "npm", "run", "start" ]