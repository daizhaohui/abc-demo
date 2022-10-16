
# develpoment

```bash
npm start
```

# create docker image

```bash
npm run prod
docker rmi -f abc-demo/nginx
docker build -f Dockerfile -t abc-demo/nginx .
```

# start docker image

```bash
docker run -p 8001:80 abc-demo/nginx
```