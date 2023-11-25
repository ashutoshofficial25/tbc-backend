FROM node:18

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=development

CMD [ "npm", "run" ,"dev" ]