FROM node:16-alpine as web
ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

RUN yarn build
RUN yarn build-storybook

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
RUN mkdir app
RUN mkdir storybook

COPY --from=web /app/dist ./app
COPY --from=web /app/storybook-static ./storybook

ENTRYPOINT ["nginx", "-g", "daemon off;"]
