# Runs when image builds
FROM node:latest

ENV WORKDIR /user/apps
WORKDIR ${WORKDIR}

ENV PORT 3000

RUN apt-get clean && apt-get update

COPY . .

RUN yarn

EXPOSE 3000

# Runs when container runs
ENTRYPOINT node ./src/index.js
