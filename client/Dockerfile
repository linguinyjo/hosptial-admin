FROM node:alpine as builder

WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . . 
RUN npm run build

#all build assets stored in the container /app directory which then get copied over to our nginx server

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
