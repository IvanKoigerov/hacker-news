FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

RUN npm run build

FROM nginx:1.23-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
