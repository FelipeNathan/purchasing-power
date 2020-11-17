FROM ruby:2.6

RUN apt-get update
RUN apt-get install -y libpq-dev dos2unix \
    && wget -O /usr/local/bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/55c54a5abdfb32637b563b28cc088314b162195e/wait-for-it.sh \
    && chmod +x /usr/local/bin/wait-for-it.sh 

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN gem install bundler
RUN bundle install

COPY . /app

RUN dos2unix $(find . -type f)

ENTRYPOINT [ "./entrypoints/docker-entrypoint.sh" ]
