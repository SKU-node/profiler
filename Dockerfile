FROM node:16.10.0

WORKDIR /profiler

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . /profiler

CMD ["yarn", "start:nodemon"]