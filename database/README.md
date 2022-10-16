
# create docker image

```bash
docker rmi -f abc-demo/mysql
docker build -f Dockerfile -t abc-demo/mysql .
```

# start docker image

```bash
docker run  -v /var/mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=abc-demo -d abc-demo/mysql
```
