# Base Dapp

## Cài đặt

```
git clone https://github.com/ProjectSanbox/landing.git landing
cd landing
yarn install
```

### Chạy môi trường development

```
yarn start
```

### Build và test thử production

Build:

```
yarn build
```

Test thử bằng cách serve thư mục **build** bằng package `serve`:

```
serve -s build
```

Nếu chưa có package `serve` thì cài global bằng lệnh `yarn global add serve`.

### Cấu trúc thư mục
