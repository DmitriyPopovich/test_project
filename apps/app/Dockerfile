FROM node:13 as node
WORKDIR /app/apps/app
COPY ./apps/app/package.json ./package.json

RUN npm install -g npm@6.12.1
RUN npm i libvips

RUN npm install
COPY . ../../
WORKDIR /app


WORKDIR /app/apps/app
ARG env=prod
ENV PUBLIC_URL=http://127.0.0.1:3001
RUN npm run build

FROM nginx:1.13
COPY --from=node /app/apps/app/build /usr/share/nginx/html
COPY ./apps/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80