FROM node:16.14.0-alpine AS frontend
COPY . .

RUN yarn config set "strict-ssl" false -g &&  \
    yarn install &&  \
    yarn build:web

FROM nginx:1.20.2-alpine AS backend
COPY --from=frontend $HOME/src/browser/dist /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

