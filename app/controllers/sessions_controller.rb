class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]
  def new
    # Renders login form
  end

# def create
#   user = User.find_by(username: params[:username]) || User.find_by(email: params[:username])
#   puts "Params received: #{params.inspect}"
#   puts "Found user: #{user.inspect}"  
#   if user&.authenticate(params[:password])
#     session[:user_id] = user.id
#     if user.superuser?
#       redirect_to users_path, notice: "Welcome superuser!"
#     else
#       redirect_to dashboard_path, notice: "Logged in successfully"
#     end
#   else
#     flash.now[:alert] = "Invalid username/email or password"
#     render :new
#   end
# end


#   def destroy
#     # session[:user_id] = nil
#     reset_session  # This clears all session data completely
#     redirect_to login_path, notice: "Logged out successfully"
#   end

  def create
    user = User.find_by(username: params[:username]) || User.find_by(email: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {
        message: "Logged in",
        user: { id: user.id, username: user.username, email: user.email, grants: user.grants || [] },
      }, status: :ok
    else
      render json: { error: "Invalid credentials" }, status: :unauthorized
    end
  end

  def destroy
    reset_session
    render json: { message: "Logged out successfully" }
  end

  def status
    if current_user
      render json: {
        logged_in: true,
        user: { id: current_user.id, username: current_user.username, email: current_user.email, grants: current_user.grants || [] },
      }
    else
      render json: { logged_in: false }
    end
  end
end
