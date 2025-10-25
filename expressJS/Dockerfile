FROM node:24-alpine
ENV NODE_ENV=production
ENV PORT=80
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit-dev
COPY . .
CMD ["npm", "start"]