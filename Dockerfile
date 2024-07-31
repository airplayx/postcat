FROM node:16.14.0-alpine AS frontend
COPY . .

RUN yarn config set "strict-ssl" false -g &&  \
    yarn install &&  \
    yarn build:web &&  \
    yarn cache clean

FROM node:16.14.0-alpine
RUN apk add --no-cache nginx=1.20.2-r2

COPY --from=frontend $HOME/nginx.conf /etc/nginx/http.d/default.conf
COPY --from=frontend $HOME/node_modules /node_modules
COPY --from=frontend $HOME/src/browser/dist /browser/dist
COPY --from=frontend $HOME/src/node /node
COPY --from=frontend $HOME/run.sh /run.sh
RUN chmod +x /run.sh

EXPOSE 80
EXPOSE 4201
EXPOSE 13928
CMD ["/run.sh"]
