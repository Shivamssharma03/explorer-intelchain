FROM ubuntu    

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /app

RUN npm install -g yarn


COPY package.json package.json
COPY package-lock.json package-lock.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

EXPOSE 3008

CMD ["yarn", "dev"]



