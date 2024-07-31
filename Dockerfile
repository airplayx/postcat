FROM node:16.14.0-alpine AS frontend
COPY . .

RUN cd /src/browser && \
    yarn config set "strict-ssl" false -g &&  \
    yarn install &&  \
    yarn cache clean

EXPOSE 4200
CMD ["yarn","start:web"]
