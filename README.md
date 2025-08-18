# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


common header file inject 
	(logo on left, action always redirect to dashboard page)
	(links to navigate to products, contact-us page) 
	(username/Guest on right, logout) 
common footer file inject

manage modularize in different folders
users (with username, password, email)
login (no session redirect to login page always except for contact-us page, otherwise to dashboard page)
products(code, name, quantity)
dashboard is a default landing page (always says "Hello [username] / Guest")
contact-us(email, name, ref to product code) page with form submit
run server on 3021

rails db:drop db:create db:migrate db:seed
rails generate migration CreateContactUs
rails db:migrate

logout as delete method
bin/importmap pin @rails/ujs
in application js
import Rails from "@rails/ujs"
Rails.start()
npx kill-port <PORT>


Run:
bin/vite dev --debug
rails server -p 3021
http://127.0.0.1:3021/