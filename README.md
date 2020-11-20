# Purchasing Power
A project to compare the purchasing power of countries, using the concept of [Big Mac Index](https://pt.wikipedia.org/wiki/%C3%8Dndice_Big_Mac)

This is the project that Dockerize the react-purchasing-power and scrap-purchasing-power

## Prerequisites 
### For Docker usage
* Docker
* docker-compose

### For localhost usage
* Check each project's README.md

## Instalation
For Window user, need to download the project with linux file type (lf instad crlf)
* `git config --global core.autocrlf input`

Download de project
* `git clone git@github.com:FelipeNathan/purchasing-power.git`

## Running on Docker

Docker-compose will run the front-end and a api

* Just access http://localhost:3000

## Running in localhost
* Check each project's README.md

## Commands
* RUN: `docker-compose up -d` (this command will create and start containers)
* STOP: `docker-compose stop`
* START: `docker-compose start`

## Environment Variable
* `PORT`: the server will listen this configuration
* `REDIS_URL`: url for redis caching
* `QUANDL_API_KEY`: key of quandl api
* `REACT_APP_SCRAP_API`: Url for api server
* `SCRAP_HOST`: Url for scrap project
* `DATABASE_URL`: db-purchasing-power connection string

## Collaborators
| [@FelipeNathan][felipenathan] |
| :-------------------------------: |
|       ![][p_felipenathan]         |
|         Software Engineer         |

[felipenathan]: http://github.com/FelipeNathan
[p_felipenathan]: https://avatars2.githubusercontent.com/u/16759812?s=100&v=4git
