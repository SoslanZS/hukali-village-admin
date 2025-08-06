FROM node:21-alpine

WORKDIR /srv

RUN apk update && apk upgrade

COPY . /srv

RUN apk add --no-cache make g++ python3
RUN npm i mysql2
RUN npm i
RUN npm run build

RUN mkdir -p /srv/public/uploads && chown -R node:node /srv/public/uploads

EXPOSE 1337

CMD [ "npm", "run", "start" ]