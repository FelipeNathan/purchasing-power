heroku:
	git remote add heroku-api-purchasing-power https://git.heroku.com/api-purchasing-power.git;
	heroku buildpacks:add -a api-purchasing-power -i 1 https://github.com/lstoll/heroku-buildpack-monorepo;
	git remote add heroku-scrap-purchasing-power https://git.heroku.com/scrap-purchasing-power.git;
	heroku buildpacks:add -a scrap-purchasing-power -i 1 https://github.com/lstoll/heroku-buildpack-monorepo;
	git remote add heroku-purchasing-power https://git.heroku.com/purchasing-power.git;
	heroku buildpacks:add -a purchasing-power -i 1 https://github.com/lstoll/heroku-buildpack-monorepo;
	
deploy:
	heroku config:set APP_BASE=api-purchasing-power -a api-purchasing-power;
	heroku config:set APP_BASE=scrap-purchasing-power -a scrap-purchasing-power;
	heroku config:set APP_BASE=react-purchasing-power -a purchasing-power ;
	git push heroku master