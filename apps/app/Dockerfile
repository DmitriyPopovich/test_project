FROM node:14-alpine as build
WORKDIR /app/apps/app
COPY ./apps/app/package.json ./package.json

#RUN npm install -g npm@6.12.1
#RUN npm install libvips

RUN npm install
COPY . ../../
WORKDIR /app


WORKDIR /app/apps/app
ARG env=prod
ENV PUBLIC_URL=http://image.local
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/apps/app/build /usr/share/nginx/html
COPY ./apps/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80