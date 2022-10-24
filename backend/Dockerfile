FROM node:16.18-alpine
LABEL author=daizhaohui
RUN mkdir -p /app
WORKDIR /app
# 复制当前代码到/app工作目录
COPY . .
# npm 安装依赖
RUN npm install -g yarn
RUN yarn install
# 打包
RUN npm run build
CMD ["node", "dist/main.js"]
EXPOSE 8002