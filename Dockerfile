FROM quay.io/ukhomeofficedigital/nodejs-base:v8

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install --production --no-optional
COPY . /app

USER nodejs

CMD node index.js
