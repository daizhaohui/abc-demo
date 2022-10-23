FROM node:16.18-alpine
LABEL author=daizhaohui
RUN mkdir -p /app
WORKDIR /app
# 复制当前代码到/app工作目录
COPY . ./
# npm 安装依赖
RUN rm -rf node_modules
RUN npm install 
# 打包
RUN npm run build
CMD npm run start:prod
EXPOSE 8002