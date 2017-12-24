FROM ruby:2.4-alpine3.7

RUN apk update && apk add build-base nodejs yarn postgresql-dev

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install --binstubs

COPY . .

LABEL maintainer="David Zhang <davzz78@gmail.com>"

CMD puma -C config/puma.rb
