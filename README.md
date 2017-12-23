# README

## INSTALLATION
Inspired by Nick Janetakis [blog post](https://nickjanetakis.com/blog/dockerize-a-rails-5-postgres-redis-sidekiq-action-cable-app-with-docker-compose)
### Docker
* Install Docker
* Build Docker Image
  * `docker-compose up --build`
* Start containers
  * `docker-compose start`
* Stop containers
  * `docker-compose stop`
* View containers status
  * `docker-compose ps`
* View logs
  * `docker-compose logs -f`
### Database
* Reset the database
  * `docker-compose exec website rails db:reset`
* Migrate the database
  * `docker-compose exec website rails db:migrate`
## SYSTEM DEPENDENCIES
* Ruby version 2.4.3
* Rails 5.1.3
* [Puma](http://puma.io/) - Web Server for Ruby
* [PostgreSQL](https://www.postgresql.org/) - SQL database
* [Redis](https://redis.io/) - Key value database as cache backend (eg: for Sidekiq)
* [Sidekiq](https://sidekiq.org/) - Background job processor
* [Webpacker](https://github.com/rails/webpacker) - For React on Rails

_Things you may want to cover:_
* Configuration
* How to run the test suite
* Services (job queues, cache servers, search engines, etc.)
* Deployment instructions
