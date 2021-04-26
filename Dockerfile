FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /frontend
ADD . /frontend
RUN npm install
EXPOSE 8080
CMD npm run serve