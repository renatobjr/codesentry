FROM node:lts
WORKDIR /var/www
COPY web .
CMD [ "npm", "run", "dev" ]