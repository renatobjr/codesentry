FROM node:lts
RUN mkdir -p /var/www/codesentry
WORKDIR /var/www/codesentry
COPY web .
CMD [ "npm", "run", "dev" ]