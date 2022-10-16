
# deploy on EC2 (os: Amazon Linux2)

## login EC2 instance host

please login EC2 instance host by using ssh client

## install docker

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
docker run -p 80:80 daizhaohui/abc-demo-nginx:1.0


// start up automatically
docker ps 

docker update --restart=always [CONTAINER ID]   // Image = daizhaohui/abc-demo-nginx:1.0
```