FROM buildkite/puppeteer:v3.0.4

WORKDIR /app
COPY package*.json /app/

RUN npm install
RUN npm install -g typescript

COPY . /app

CMD npm run postinstall && npm start