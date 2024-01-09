# db/seeds.rb
require 'faker'

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# create test users
10.times do
  User.create!(
    username: Faker::Internet.username,
    password: Faker::Internet.password,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65)
  )
end

# create product types
product_types = ["buste", "carta", "toner"]
product_types.each do |product_type|
  ProductType.create!(name: product_type)
end

# create test products
10.times do
  Product.create!(
    object_name: Faker::Commerce.product_name,
    description: Faker::Lorem.paragraph,
    insertion_date: Faker::Date.between(from: '2022-01-01', to: '2024-12-31'),
    product_type: ProductType.all.sample
  )
end
