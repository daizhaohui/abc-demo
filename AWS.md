# deploy method one

## install docker environment

```bash
sudo yum -y install docker
// start up automatically
sudo systemctl enable docker.service 
sudo systemctl start docker
sudo gpasswd -a $USER docker
newgrp docker
```

## install mysqlclient
   
   sudo yum install mysql   / yum install mariadb

   mysql -h abc-demo-db.cluster-cg3ricvqifqx.ap-northeast-2.rds.amazonaws.com -P 3306 -u admin -p

   show databases;
   use demo;
   
   // run sql.script initialize database

## install docker images

```bash
docker pull daizhaohui/abc-demo-nginx
docker pull daizhaohui/abc-demo-node:1.0
```

## start docker images:

```bash
docker network create abc-demo-net
docker run -dit -p 8002:8002 --network abc-demo-net --network-alias abc-demo-node --env ENV_DB_HOST=abc-demo-db.cluster-cg3ricvqifqx.ap-northeast-2.rds.amazonaws.com --env ENV_DB_USERNAME=admin  --env ENV_DB_PASSWORD=admin123 --env ENV_DB_DATABASE=demo  -d daizhaohui/abc-demo-node:1.0
docker run -p 80:80 --network abc-demo-net --network-alias abc-demo-nginx -d daizhaohui/abc-demo-nginx
```

# deploy method two

// docker name & images

abc-demo-node
daizhaohui/abc-demo-node:1.0
// enviroment parameters
ENV_DB_HOST=abc-demo-db.cluster-cg3ricvqifqx.ap-northeast-2.rds.amazonaws.com
ENV_DB_DATABASE=demo
ENV_DB_USERNAME=admin
ENV_DB_PASSWORD=admin123
<!-- ENV_DB_TYPE=
ENV_S3_BUCKET
ENV_S3_ID
ENV_S3_KEY -->

abc-demo-nginx
daizhaohui/abc-demo-nginx:1.0
80:80
// links
cd






