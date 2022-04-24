FROM node:18-buster

WORKDIR /app

COPY [^n]* /app/

RUN npm i

CMD ["node", "server.js"]