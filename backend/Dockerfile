FROM node:16.18-alpine
LABEL author=daizhaohui
RUN mkdir -p /app
WORKDIR /app
COPY . .
# npm 安装依赖
RUN npm install
# 打包
RUN npm run build
CMD ["node", "dist/main.js"]
EXPOSE 8002