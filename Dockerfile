FROM node:lts

WORKDIR /usr/node/app

COPY . .

RUN if [ ! -d .docker/dbdata ]; then mkdir -p .docker/dbdata; fi && \
  chown -R node .docker/

RUN apt-get update && \
  apt-get install -y openssl

RUN rm -rf ./node_modules

RUN npm install -g @nestjs/cli
RUN npm install -g prisma
RUN npm install -g @prisma/client

COPY ./package.json .

RUN npm install
RUN prisma generate
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start:dev"]