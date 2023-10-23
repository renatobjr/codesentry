FROM node:16.20.1
WORKDIR /var/www
COPY api .
RUN npm i -g nodemon
CMD [ "npm", "run", "dev" ]