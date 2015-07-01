#!/bin/bash
rm -r /var/www/iojs-vi.com/iojs-vi/.origin2

cd /var/www/iojs-vi.com

if [ ! -d /var/www/iojs-vi.com/iojs-vi ]; then
    git clone -b live https://github.com/iojs/iojs-vi.git
fi

cd iojs-vi

if [ ! -e /var/www/iojs-vi.com/iojs-vi/.origin2 ]; then
    git remote remove origin2
    git remote add origin2 https://github.com/particles4dev-team/iojs-vi.git
    touch ./.origin2
fi

rm -r _site

BRANCH="particles4dev-team"

if [ "$1" = "$BRANCH" ]; then
    git pull origin2 live
else
    git pull origin live
fi

jekyll b
