FROM node:lts-alpine3.9

WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install -g react-scripts@3.4.1

COPY . ./

EXPOSE 3000

CMD npm run start

# docker build . -t react-image
# docker run -p 3000:3000 -i -t /bin/bash --name react-container react-image