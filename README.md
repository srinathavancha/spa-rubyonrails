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


rails generate migration AddGrantsToUsers grants:text
rails db:migrate
rails db:drop db:create db:migrate db:seed

Run:
bin/vite dev --debug
rails server -p 3021
http://127.0.0.1:3021/


curl --location 'http://localhost:3021/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: _test_rubyrails_session=T8nbTC57E%2B6lqUmG9XGBlcjxFffulxR6RMH9qyHKvNm8r1AZ9wbVDB8AZqeDH86Ym1dNskvuVacLfw0j3rUkgteG921SgJwK7jKGQ0mdIikBiKwVVrHIBsJiCyz7IT5CJMZIpBFfmcHEb87Lrol68cGgn0Dmxtb5Z6g01%2B1gKGNAdH%2BsQRZVPjs%2FWnXTBAZKUt88z8g5pN98PueK%2FfNZSV8ZqZs504GNh9f2Gc2I0xB0iURpcjlIxiHqV1iQa6XboYoUD3nBYlYxBTt%2BaUapo3DTuG0hJ0bzJ0LsqX56ww%3D%3D--%2BvARkoJnITzqZnv0--aF8vmra6vqt9AoZNQBc4Pw%3D%3D' \
--data '{
  "username": "member",
  "password": "member123"
}
'

curl --location --request GET 'http://localhost:3021/api/session_status' \
--header 'Content-Type: application/json' \
--header 'Cookie: _test_rubyrails_session=T8nbTC57E%2B6lqUmG9XGBlcjxFffulxR6RMH9qyHKvNm8r1AZ9wbVDB8AZqeDH86Ym1dNskvuVacLfw0j3rUkgteG921SgJwK7jKGQ0mdIikBiKwVVrHIBsJiCyz7IT5CJMZIpBFfmcHEb87Lrol68cGgn0Dmxtb5Z6g01%2B1gKGNAdH%2BsQRZVPjs%2FWnXTBAZKUt88z8g5pN98PueK%2FfNZSV8ZqZs504GNh9f2Gc2I0xB0iURpcjlIxiHqV1iQa6XboYoUD3nBYlYxBTt%2BaUapo3DTuG0hJ0bzJ0LsqX56ww%3D%3D--%2BvARkoJnITzqZnv0--aF8vmra6vqt9AoZNQBc4Pw%3D%3D' \
--data '{
  "username": "member",
  "password": "member123"
}
'

curl --location --request DELETE 'http://localhost:3021/logout' \
--header 'Content-Type: application/json' \
--header 'Cookie: _test_rubyrails_session=MPYZgfTJHWSTFQ1Xhciz4KlbSOhj6WrRyx8TN%2FpTZ9VZ4C4ASGhtRuO0e5kPzQLpK6%2BUZCQvuO%2BklyYJCf9F%2BwnuDG7rxTsTLoT0YCOs4VUUS2%2BuUx%2BRhu%2BqXCIU1KMFTREALCJ%2Bd3YaK7nnOYNDcCe1opmjIcTFY82CMCjn%2F4x0ZAXUU5EsH7NSPTgkexo%3D--rxxCPqgXMEKwruM4--AMqcCDZBQ8wi6XSeKzVIAw%3D%3D' \
--data '{
  "username": "member",
  "password": "member123"
}
'

