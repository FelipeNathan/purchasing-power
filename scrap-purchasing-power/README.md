# Scrap Purchasing Power
A project to compare the purchasing power of countries, using the concept of [Big Mac Index](https://pt.wikipedia.org/wiki/%C3%8Dndice_Big_Mac)

This is the back-end API project of the Purchasing Power, made with nodejs
This project get datas in [Country Economy](https://pt.countryeconomy.com/mercado-laboral/salario-minimo-nacional) site, so, if the minimum wage is outdated, is because the site still don't updated its databases

#### Techs
- NodeJS
- Express
- Puppeteer

#### Requirements
- Node 
- Npm or Yarn

#### Setup
First clone our repository
```
git clone https://github.com/FelipeNathan/scrap-purchasing-power.git
```

Navigate to scrap-purchasing-power app
```
cd scrap-purchasing-power
```

Then install dependencies

* Npm: `npm install`
* Yarn: `yarn install`

and execute

Npm: `npm run dev`
Yarn: `yarn run dev`

_Obs: The `dev` configuration use `nodemon` that restart the server automatically every time you save your changes_ 

#### Environment Variable
In .env file at root project, configure:
* `PORT`: the server will listen this configuration
* `REDIS_URL`: url for redis caching
* `QUANDL_API_KEY`: key of quandl api

#### Next Features
- [x] Caching the wage infos

### Collaborators
| [@FelipeNathan][felipenathan] |
| :-------------------------------: |
|       ![][p_felipenathan]         |
|         Software Engineer         |

[felipenathan]: http://github.com/FelipeNathan
[p_felipenathan]: https://avatars2.githubusercontent.com/u/16759812?s=100&v=4git
