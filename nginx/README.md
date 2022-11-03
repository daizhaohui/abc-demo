docker rmi -f nginx-demo
docker build -f Dockerfile -t nginx-demo .

docker run -p 80:80 -d nginx-demo