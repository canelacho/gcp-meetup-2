FROM alpine
RUN  apk add --update nodejs nodejs-npm
RUN mkdir -p /home/app
WORKDIR /home/app
COPY package*.json ./
RUN npm install --quiet
COPY . .
EXPOSE 443 80
CMD [ "npm", "start" ]