run:
	docker run -d -p 3000:3000 --rm --name hacker_news koigerov/hacker-news
stop:
	docker stop hacker_news
build:
	docker build -t koigerov/hacker-news .