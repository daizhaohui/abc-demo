
# install on EC2 or local machine

## install docker environment

```bash
sudo yum -y install docker
// start up automatically
sudo systemctl enable docker.service 
sudo systemctl start docker
sudo gpasswd -a $USER docker
newgrp docker
```

## install docker images

```bash
docker pull daizhaohui/abc-demo-nginx
docker pull daizhaohui/abc-demo-node
docker pull daizhaohui/abc-demo-mysql
```

## create docker bridge network

```bash
docker network create abc-demo-net
 ```

## create demo database

```
// start 
docker run -p 3306:3306 --network abc-demo-net --network-alias abc-demo-mysql -v /var/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=abc-demo -d daizhaohui/abc-demo-mysql

// find daizhaohui/abc-demo-mysql container id
docker ps

// enter into container
docker exec [container id] -it /bin/sh

// create database 
mysql -u root -p    (input password: abc-demo)
create database demo;   
use demo;
source /tmp/script.sql;
// exit mysql
exit

// exit container
exit
// kill daizhaohui/abc-demo-mysql container 
docker kill [container id]

```
## start docker images by below sequence

```bash
// first
docker run -p 3306:3306 --network abc-demo-net --network-alias abc-demo-mysql -v /var/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=abc-demo -d daizhaohui/abc-demo-mysql
// second
docker run -dit -p 8002:8002 --network abc-demo-net --network-alias abc-demo-node -d daizhaohui/abc-demo-node
// last
docker run -p 80:80 --network abc-demo-net --network-alias abc-demo-nginx -d daizhaohui/abc-demo-nginx
```
## access demo
open browser and input http://[ip]

