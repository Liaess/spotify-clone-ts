FROM node:16.15 As development
WORKDIR /usr/src/spotify-clone-ts
COPY ./package*.json ./
RUN npm ci --legacy-peer-deps
