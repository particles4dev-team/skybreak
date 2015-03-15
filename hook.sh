#!/bin/bash

cd /var/www/

if [ -d /var/www/iojs-vi ]; then
  rm -r /var/www/iojs-vi
fi

git clone -b live https://github.com/iojs/iojs-vi.git

mv /var/www/iojs-vi/es6.html /var/www/iojs-vi.com/public_html/vi/
mv /var/www/iojs-vi/faq.html /var/www/iojs-vi.com/public_html/vi/
mv /var/www/iojs-vi/index.html /var/www/iojs-vi.com/public_html/vi/
