FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine

RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
