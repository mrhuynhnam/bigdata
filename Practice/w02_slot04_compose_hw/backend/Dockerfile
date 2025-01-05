FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN ["npm", "ci"]

COPY . .

EXPOSE 80

CMD ["npm", "run", "start"]