class UsersController < ApplicationController
  before_action :check_superuser, only: [:index, :edit, :update]

  def index
    @users = User.all
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    if params[:user][:password].blank?
      params[:user].delete(:password)
    end    
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to users_path, notice: "User updated successfully."
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :superuser)
  end

  def check_superuser
    redirect_to dashboard_path, alert: "Access denied." unless current_user&.superuser?
  end
end
