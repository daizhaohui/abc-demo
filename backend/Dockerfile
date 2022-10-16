FROM node:16.18-alpine
LABEL author=daizhaohui
RUN mkdir app
WORKDIR /app
COPY dist ./
COPY package.json ./
ENV NODE_ENV=production
RUN npm install --production
USER node
EXPOSE 8002
CMD ["node", "main.js"]
