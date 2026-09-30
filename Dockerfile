# Stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG SITE_URL
ARG PUBLIC_FORMSPREE_ENDPOINT
ENV SITE_URL=${SITE_URL}
ENV PUBLIC_FORMSPREE_ENDPOINT=${PUBLIC_FORMSPREE_ENDPOINT}
RUN npm run build

# Stage 2: serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
