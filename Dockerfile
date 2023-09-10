FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 80
CMD ["yarn", "run", "dev"]