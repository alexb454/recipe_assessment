FROM node:14

WORKDIR /usr/src/recipe_assessment

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "seed/seed.js" ]
