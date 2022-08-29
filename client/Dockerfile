FROM node:16.14.2
ENV NODE_ENV development

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]