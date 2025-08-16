class ContactUs < ApplicationRecord
  # Basic validations
  validates :name, presence: true
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :product_code, presence: true

  # Optional: helper method to get associated Product by product_code
  def product
    Product.find_by(code: product_code)
  end
end
