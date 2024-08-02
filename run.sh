#!/bin/sh

node /node/test-server/server/main.js &
node /node/test-server/server/socketio.js &
nginx -g 'daemon off;' &
echo 'Nginx Server is running at port 80 ...'

wait