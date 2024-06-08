FROM node:20-alpine
COPY package.*json .
COPY . .
RUN npm cache clean -f \
  && npm i --production \
  && npm i audit fix