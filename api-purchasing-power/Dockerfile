FROM ruby:2.6

RUN apt-get update
RUN apt-get install -y sqlite3 libsqlite3-dev 

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN gem install bundler
RUN bundle install

COPY . /app

RUN rake db:migrate
RUN rake db:seed

ENTRYPOINT [ "./entrypoints/docker-entrypoint.sh" ]
