FROM node:16.20-bullseye-slim as builder 
RUN mkdir -p /home/node/express-swagger/node_modules && chown -R node:node /home/node/express-swagger
WORKDIR /home/node/express-swagger

USER node
COPY package.json package.json

RUN npm install
COPY --chown=node:node . .
EXPOSE 5000
CMD [ "npm", "run", "start" ]