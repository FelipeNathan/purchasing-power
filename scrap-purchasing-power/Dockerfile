FROM buildkite/puppeteer:v3.0.4

WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install -g typescript

COPY . ./

EXPOSE 3500

CMD npm run postinstall && npm start

# docker build . -t scrap-image
# docker run -p 3500:3500 --name scrap-container scrap-image