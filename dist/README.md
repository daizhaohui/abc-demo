
# build images

please build images in the direcotry of dist

## build frontend

docker rmi -f abc-demo/nginx
docker build -f ./docker/nginx.dockerfile -t abc-demo/nginx .

# run images

## run frontend

docker run -p 8001:80 abc-demo/nginx
