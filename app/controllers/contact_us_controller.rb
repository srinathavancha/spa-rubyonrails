class ContactUsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @contact_us = ContactUs.new
    @products = Product.all  # Load all products for dropdown
  end

  def create
    @contact_us = ContactUs.new(contact_us_params)
    if @contact_us.save
      redirect_to root_path, notice: "Thank you for contacting us."
    else
      @products = Product.all  # reload products if form re-renders with errors
      render :new
    end
  end

  private

  def contact_us_params
    params.require(:contact_us).permit(:email, :name, :product_code)
  end
end
