class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :set_cache_buster
  helper_method :current_user

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end


  def authenticate_user!
    return if current_user
    return if params[:controller] == 'sessions' && ['new', 'create', 'status'].include?(params[:action])
    return if params[:controller] == 'users' && ['new', 'create'].include?(params[:action])
    # return if params[:controller] == 'contact_us' # Allow all actions here
    
    redirect_to login_path, alert: "Please login to continue."
  end

  # def route_not_found
  #   if session[:user_id].present?
  #     render file: Rails.public_path.join('404.html'), status: :not_found, layout: false
  #   else
  #     redirect_to login_path
  #   end
  # end

  def route_not_found
    render plain: "404 Not Found", status: 404
  end


  private

  def set_cache_buster
    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
  end
end
