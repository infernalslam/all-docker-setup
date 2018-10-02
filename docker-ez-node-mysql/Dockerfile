FROM node:8.9.1-alpine

WORKDIR /nodeapp
COPY . /nodeapp
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]