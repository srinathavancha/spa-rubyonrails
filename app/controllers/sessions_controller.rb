class SessionsController < ApplicationController
  def new
    # Renders login form
  end

def create
  user = User.find_by(username: params[:username]) || User.find_by(email: params[:username])
  puts "Params received: #{params.inspect}"
  puts "Found user: #{user.inspect}"  
  if user&.authenticate(params[:password])
    session[:user_id] = user.id
    if user.superuser?
      redirect_to users_path, notice: "Welcome superuser!"
    else
      redirect_to dashboard_path, notice: "Logged in successfully"
    end
  else
    flash.now[:alert] = "Invalid username/email or password"
    render :new
  end
end


  def destroy
    # session[:user_id] = nil
    reset_session  # This clears all session data completely
    redirect_to login_path, notice: "Logged out successfully"
  end
end
