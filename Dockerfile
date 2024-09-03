
FROM node:18

WORKDIR /spotstitch


COPY Server/package*.json ./Server/
RUN cd Server && npm install


COPY Client/package*.json ./Client/
RUN cd Client && npm install


COPY Server ./Server
COPY Client ./Client


RUN npm install -g concurrently


EXPOSE 8080 3000 


CMD concurrently "cd Server && npm start" "cd Client && npm start"
