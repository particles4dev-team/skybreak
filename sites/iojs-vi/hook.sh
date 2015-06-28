#!/bin/bash

echo "hello"

cd /var/www/iojs-vi.com

if [ ! -d /var/www/iojs-vi.com/iojs-vi ]; then
    git clone -b live https://github.com/iojs/iojs-vi.git
fi

cd iojs-vi
rm -r _site
git pull origin live
jekyll b
