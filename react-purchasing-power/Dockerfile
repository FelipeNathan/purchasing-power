FROM node:lts-alpine3.9

WORKDIR /app
COPY package*.json /app/

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --silent
RUN npm install -g react-scripts@3.4.1 --silent

COPY . /app

CMD ["npm", "start"]