FROM node:16 as builder
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
RUN npx prisma migrate dev --name init
EXPOSE 5000
CMD ["npm", "run", "build"]

