FROM node:18.3.0

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]