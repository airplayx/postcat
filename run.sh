#!/bin/sh

node /node/test-server/server/main.js &
node /node/test-server/server/socketio.js &
nginx -g 'daemon off;' &

wait
