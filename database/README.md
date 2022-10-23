
# create docker image

```bash
docker rmi -f abc-demo-mysql
docker build -f Dockerfile -t abc-demo-mysql .
```

# start docker image

```bash
// create database: shareing data with docker image
mkdir /var/mysql
copy data.zip /var/mysql
cd /var/mysql
tar -xvf data.zip

// start 
docker run -p 3306:3306 -v /var/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=abc-demo -d abc-demo-mysql
```
