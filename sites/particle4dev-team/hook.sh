#!/bin/bash

cd /var/www

if [ ! -d /var/www/particle4dev.com ]; then
    git clone -b master https://github.com/particles4dev-team/particle4dev-sites.git
    mv particle4dev-sites particle4dev.com
fi

cd particle4dev.com
git pull origin master
npm install
gulp build

