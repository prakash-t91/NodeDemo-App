FROM node:20-bookworm-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

# Stage 2: Production
FROM node:20-bookworm-slim AS production

ENV NODE_ENV production

USER node

WORKDIR /app

COPY --chown=node:node --from=build /app/node_modules ./node_modules

COPY --chown=node:node . .

EXPOSE 3000

CMD ["node", "server.js"]
