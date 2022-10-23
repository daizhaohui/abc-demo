FROM nginx:1.17.3
COPY dist /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf