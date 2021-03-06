# Api Purchasing Power
A project to compare the purchasing power of countries, using the concept of [Big Mac Index](https://pt.wikipedia.org/wiki/%C3%8Dndice_Big_Mac)

This is the back-end API project of the Purchasing Power, made with Ruby On Rails

This project is still in progress, cuz I'm migrating some features of scrap-purchasing-power to this project.

#### Prerequisites
- ![](https://img.shields.io/badge/Ruby-2.2.6-green)
- ![](https://img.shields.io/badge/Rails-6.0.3-green)
- ![](https://img.shields.io/badge/Bundler-2.1.4-green)
- libpq-dev (for postgres)

#### Setup
For Ruby, follow [this instructions](https://www.ruby-lang.org/pt/documentation/installation/)

Install prerequisites and libs
```
$ apt-get update
$ apt-get install -y libpq-dev
$ gem install bundler
```

First clone our repository
```
git clone https://github.com/FelipeNathan/purchasing-power.git
```

Navigate to api-purchasing-power app
```
cd purchasing-power/api-purchasing-power
```

Then install dependencies

```
$ bundle install
$ rake db:create db:migrate db:seed DATABASE_URL=<URL_FOR_POSTGRES_DB>
```

and execute

```
rails serve
```

#### Environment Variable
In .env file at root project, configure:
* `PORT`: the server will listen this configuration
* `REDIS_URL`: url for redis caching
* `QUANDL_API_KEY`: key of quandl api
* `SCRAP_HOST`: Url for scrap-purchasing-power app
* `DATABASE_URL`: db-purchasing-power connection string

### Collaborators
| [@FelipeNathan][felipenathan] |
| :-------------------------------: |
|       ![][p_felipenathan]         |
|         Software Engineer         |

[felipenathan]: http://github.com/FelipeNathan
[p_felipenathan]: https://avatars2.githubusercontent.com/u/16759812?s=100&v=4git
