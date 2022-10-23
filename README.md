
# install on EC2

## login EC2 host

please login EC2 instance host by using ssh client

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

## create docker network

```bash
docker network create abc-demo-net
 ```

## start docker images by below sequence

```bash
// first
docker run -p 3306:3306 --network abc-demo-net --network-alias abc-demo-mysql -v /var/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=abc-demo -d abc-demo-mysql
// second
docker run -dit -p 8002:8002 --network abc-demo-net --network-alias abc-demo-node -d abc-demo-node
// last
docker run -p 80:80 --network abc-demo-net --network-alias abc-demo-nginx -d abc-demo-nginx

docker run -p 80:80 daizhaohui/abc-demo-nginx:1.0

```