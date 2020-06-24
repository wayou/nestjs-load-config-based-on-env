# nestjs-load-config-based-on-env

load ts cofnig based on `NODE_ENV`

## Installing

```sh
$ yarn
```

## Running

### Starting the server with `dev` mode

```sh
$ yarn start:dev
server started at http://localhost:3000
```

test it:

```sh
$ curl http://localhost:3000
CONFIG_DEV
```

### Starting the server with `prod` mode

```sh
$ yarn start:prod
server started at http://localhost:3000
```

test it:

```sh
$ curl http://localhost:3000
CONFIG_PROD
```
