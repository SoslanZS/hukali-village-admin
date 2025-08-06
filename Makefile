deploy:
	docker build -t hukali-village-admin .
	docker run -d \
		-p 1337:1337 \
		--network mariadb_default \
		--restart always \
		--name hukali-village-admin \
		-v avicenna-uploads:/srv/public/uploads \
		--env-file .env \
		hukali-village-admin

stop:
	docker stop hukali-village-admin
	docker rm hukali-village-admin
	docker rmi hukali-village-admin

redeploy:
	make stop
	make deploy

logs:
	docker logs hukali-village-admin -f