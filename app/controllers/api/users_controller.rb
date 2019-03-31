require 'open-uri'

class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        file = open('https://picsum.photos/500/700/?random')
        
        if @user.save

          @user.profile_picture.attach(io: file, filename: 'random_img.jpeg')

          login!(@user)

          render :show

        else

          render json: @user.errors.full_messages, status: 401

        end
    end
      
    def update

        @user = selected_user

        if @user && @user.update_attributes(user_params)
            render :show

        elsif !@user
            render json: ['Could not locate user'], status: 400

        else
            render json: @user.errors.full_messages, status: 401

        end
    end
    
    def show
        @user = selected_user

    end
    
    def index
        @users = User.all
    end
    
    def destroy
        @user = selected_user
        if @user
            @user.destroy
            render :show
    else
        render ['Could not find user']
    end
    end
    
    private
    
    def selected_user
        # a lot of stuff to carry to frontend, how can it be optimized?
        
        User.includes(:followers).includes(:followed).find(params[:id])
    end
    
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
