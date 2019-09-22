#FROM centos
FROM node:alpine
#RUN yum install -y epel-release & yum install -y npm
WORKDIR /usr/app
COPY ./ ./
RUN npm install
CMD ["npm","start"]
