FROM node:18

WORKDIR /

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

ENV NODE_ENV=development

CMD [ "npm", "run" ,"dev" ]