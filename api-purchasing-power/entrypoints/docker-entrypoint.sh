#!/bin/sh

set -e

if [ -f tmp/pids/server.pid ]; then
    rm tmp/pids/server.pid
fi 


wait-for-it.sh -h $DB_HOST -p 5432 -t 30 -- bin/rails db:create && bin/rails db:migrate && bin/rails db:seed &&  bin/rails s -b 0.0.0.0