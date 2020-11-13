# Api Purchasing Power
A project to compare the purchasing power of countries, using the concept of [Big Mac Index](https://pt.wikipedia.org/wiki/%C3%8Dndice_Big_Mac)

This is the back-end API project of the Purchasing Power, made with Ruby On Rails

This project is still in progress, cuz I'm migrating some features of scrap-purchasing-power to this project.

#### Techs
- Ruby
- Rails


#### Setup
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
gem install bundler
bundle install
rake db:migrate
rake db:seed
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

### Collaborators
| [@FelipeNathan][felipenathan] |
| :-------------------------------: |
|       ![][p_felipenathan]         |
|         Software Engineer         |

[felipenathan]: http://github.com/FelipeNathan
[p_felipenathan]: https://avatars2.githubusercontent.com/u/16759812?s=100&v=4git
