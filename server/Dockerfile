FROM node:alpine

WORKDIR '/app'

COPY ./package.json /app
RUN npm install
copy . /app

CMD ["npm", "run", "start"]