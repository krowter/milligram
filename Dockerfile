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
# Remove default nginx static assets
RUN rm -rf ./*
RUN mkdir app
RUN mkdir storybook

# Copy static assets from builder stage
COPY --from=web /app/dist ./app
COPY --from=web /app/storybook-static ./storybook
# WORKDIR /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
