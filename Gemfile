source 'https://rubygems.org'
ruby '2.4.3'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# Looking to use the Edge version? gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.3'

# Use Puma as the app server
gem 'puma', '~> 3.10'

# Use Rack Timeout. Read more: https://github.com/heroku/rack-timeout
gem 'rack-timeout', '~> 0.4'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'

# Use PostgreSQL as the database for Active Record
gem 'pg', '~> 0.21'

# Use Redis Rails to set up a Redis backed Cache and / or Session
gem 'redis-rails', '~> 5.0'

# Use Sidekiq as a background job processor through Active Job
gem 'sidekiq', '~> 5.0'

# Use Clockwork for recurring background tasks without needing cron
# gem 'clockwork', '~> 2.0'

# Use Kaminari for pagination
# gem 'kaminari', '~> 0.17'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

# Use Uglifier as the compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use jQuery as the JavaScript library
gem 'jquery-rails', '~> 4.3'

# Use Turbolinks. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'

# Use Bootstrap SASS for Bootstrap support
gem 'bootstrap-sass', '~> 3.3'

# Use Font Awesome Rails for Font Awesome icons
gem 'font-awesome-rails', '~> 4.7'

group :development, :test do
  # Call 'byebug' anywhere in your code to drop into a debugger console
  gem 'byebug', platform: :mri

  # End to end testing of your rails apps (Rails 5.1+ supports this)
  # gem 'capybara', '~> 2.13'
  # gem 'selenium-webdriver'

  # Call 'pry' anywhere in the code to stop execution and get a debugger console
  # gem 'pry-byebug'
  # gem 'pry-remote'
  # gem 'pry-stack_explorer'

  # To generate fake data in db
  # gem 'faker'
  # gem 'factory_girl_rails'
end

group :development do
  # Enable a debug toolbar to help profile your application
  gem 'rack-mini-profiler', '~> 0.10'

  # Access an IRB console on exception pages or by using <%= console %>
  gem 'web-console', '~> 3.3.0'

  # Get notified of file changes. Read more: https://github.com/guard/listen
  gem 'listen', '>= 3.0.5', '< 3.2'

  # Spring speeds up development
  # by keeping your application running in the background.
  # Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Add Rubocop linter
  gem 'rubocop', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data'

# Use Webpacker to install react
gem 'webpacker', '~> 3.2'

# User session management
# gem 'devise'
# Integrates OAuth2 tokens from the Doorkeeper gem into Devise authentication
# gem 'devise-doorkeeper'

# Handle EC2 mounting
# gem 'rubber'
# gem 'has_secure_token'

#### API #####
# Grape allows you to build lightweight APIs with Ruby
# gem 'grape'
# protect api calls, last verion with grape support
# gem 'doorkeeper',
#     git: 'git://github.com/doorkeeper-gem/doorkeeper.git',
#     ref: 'ab8cf72d80c2b60ed946ac461c0ac2a9e87fb34e'
# represent models
# gem 'roar'
# connect with facebook
# gem 'doorkeeper-grants_assertion',
#     git: 'git://github.com/doorkeeper-gem/doorkeeper-grants_assertion.git',
#     ref: '1b3acee'
####

# group :test do
#   gem 'rspec-rails'
#   gem 'rack-test', require: 'rack/test'
#   # stubbing and setting expectations on HTTP requests in Ruby
#   gem 'webmock'
#   gem 'database_cleaner'
#   gem 'rspec-sidekiq', '~> 3.0.0'
#   gem 'simplecov', require: false
#   gem 'elasticsearch-extensions'
# end
