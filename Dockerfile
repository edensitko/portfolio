FROM node:18-alpine AS builder
FROM nginx:alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build   # produce /app/build

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
