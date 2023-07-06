FROM node:14

WORKDIR /recipe_assessment/seed

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "/seed.js" ]
