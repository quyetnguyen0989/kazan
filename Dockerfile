FROM node:13.0-alpine
RUN apk update
RUN apk add curl ghostscript imagemagick poppler-utils
# may be use on server
RUN curl -o- -L https://yarnpkg.com/install.sh | sh

MAINTAINER quyetnguyen "quyet.nguyen0989@gmail.com"
RUN mkdir -p /code
WORKDIR /code
COPY . /code
COPY package.json .	
EXPOSE 5000
CMD ["npm", "start"]

