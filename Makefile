heroku-remote:
	git remote add heroku-api-purchasing-power https://git.heroku.com/api-purchasing-power.git
	git remote add heroku-scrap-purchasing-power https://git.heroku.com/scrap-purchasing-power.git
	git remote add heroku-purchasing-power https://git.heroku.com/purchasing-power.git

heroku-buildpacks:
	heroku buildpacks:add -a api-purchasing-power -i 1 https://github.com/lstoll/heroku-buildpack-monorepo
	heroku buildpacks:add -a api-purchasing-power heroku/ruby
	
	heroku buildpacks:add -a scrap-purchasing-power -i 1 https://github.com/lstoll/heroku-buildpack-monorepo
	heroku buildpacks:add -a scrap-purchasing-power heroku/nodejs
	heroku buildpacks:add -a scrap-purchasing-power jontewks/puppeteer

	heroku buildpacks:add -a purchasing-power -i 1 https://github.com/lstoll/heroku-buildpack-monorepo
	heroku buildpacks:add -a purchasing-power mars/create-react-app
	
heroku-deploy-api:
	heroku config:set APP_BASE=api-purchasing-power -a api-purchasing-power
	git push heroku-api-purchasing-power master
	heroku run -a api-purchasing-power rake db:migrate
	heroku run -a api-purchasing-power rake db:seed

heroku-deploy-scrap:
	heroku config:set APP_BASE=scrap-purchasing-power -a scrap-purchasing-power
	git push heroku-scrap-purchasing-power master

heroku-deploy-react:
	heroku config:set APP_BASE=react-purchasing-power -a purchasing-power
	git push heroku-purchasing-power master

api-test: 
	cd api-purchasing-power \
	&& export RAILS_ENV=test \
	&& export DATABASE_URL=postgresql://postgres:123@localhost/ \
	&& docker-compose up -d db-purchasing-power \
	&& rake db:create \
	&& rake db:migrate \
	&& rake test \
	&& docker-compose stop db-purchasing-power;

init-local-db-redis:
	docker-compose up -d redis-purchasing-power db-purchasing-power
	cd api-purchasing-power \
	&& export DATABASE_URL=postgresql://postgres:123@localhost/purchasing-power-dev \
	&& rake db:create db:migrate db:seed;