FROM node:8.10.0
RUN mkdir -p /src/app
WORKDIR /src/app
COPY dist src/app/dist
RUN npm install http-server -g
CMD ["http-server","dist/GipherUI"]