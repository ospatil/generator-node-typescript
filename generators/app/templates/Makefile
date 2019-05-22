setup:
	docker volume create <%= appname %>-nodemodules

install:
	docker-compose -f docker-compose.builder.yml run --rm install

build-watch:
	docker-compose up
