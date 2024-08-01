FROM node:16.14.0-alpine AS frontend
ENV APP /app
WORKDIR $APP
COPY . .

RUN yarn config set "strict-ssl" false -g &&  \
    yarn install &&  \
    yarn build:web &&  \
    find $APP -type d -name "node_modules" -exec rm -rf {} + &&  \
    yarn install --production &&  \
    yarn cache clean

FROM node:16.14.0-alpine
ENV APP /app
RUN apk add --no-cache nginx=1.20.2-r2

COPY --from=frontend $APP/nginx.conf /etc/nginx/http.d/default.conf
COPY --from=frontend $APP/node_modules /node_modules
COPY --from=frontend $APP/src/browser/dist /browser/dist
COPY --from=frontend $APP/src/node/test-server /node/test-server
COPY --from=frontend $APP/run.sh /run.sh
RUN chmod +x /run.sh

EXPOSE 80
EXPOSE 4201
EXPOSE 13928
CMD ["/run.sh"]
