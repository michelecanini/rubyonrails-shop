class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
  end

  def new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :first_name, :last_name, :date_of_birth)
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
