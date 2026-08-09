FROM node:18-alpine
WORKDIR /app
COPY server.js .
COPY index.ht .
EXPOSE 3000
CMD ["node", "server.js"]
