FROM node:0.12.7-onbuild
MAINTAINER Hoang Le <particle4dev@gmail.com>
RUN mkdir -p /site
COPY ./build/ /site/build
COPY ./bin/ /site/
COPY ./package.json /site/package.json
WORKDIR /site/
RUN npm install

EXPOSE 4000
CMD ["node", "./build/backend.js"]