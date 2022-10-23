
# Installation

```bash
$ npm install
```

# Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# create docker image

```bash
npm run build
docker rmi -f abc-demo-node
docker build -f Dockerfile -t abc-demo-node .
```

# start docker image

```bash
docker run -p 8002:8002 --network abc-demo-net --network-alias abc-demo-node -d abc-demo-node
```

# view api document

```bash
npm run start

http://127.0.0.1:8002/api
```
