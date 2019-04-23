require 'open-uri'

class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        file = open('https://picsum.photos/id/355/500/700')

        background_file = open('https://picsum.photos/2000/1000/?random')
        
        if @user.save

          @user.profile_picture.attach(io: file, filename: 'random_img.jpeg')
          @user.background_img.attach(io: background_file, filename: 'random_background.jpeg')
          login!(@user)

          render :show

        else

          render json: @user.errors.full_messages, status: 401

        end
    end
      
    def update

        @user = User.find(params[:id])
        # debugger
        if @user && @user.update_attributes(user_params)
            render :show

        elsif !@user
            render json: ['Could not locate user'], status: 400

        else
            render json: @user.errors.full_messages, status: 401

        end
    end
    
    def show
        @user = User.includes(:followers)
        .with_attached_profile_picture
        .includes(:followed)
        .with_attached_background_img
        .includes(:people_followed)
        .find(params[:id])
        

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


    def follow 

        @follow = Follow.new(follow_params)

        if @follow.save
            render json: ['worked']            
        else
            
            render json: ['Nope. Wrong credentials!'], status: 401
        end

    end

    def unfollow 
        @follow = Follow.where(follower_id: follow_params[:follower_id])
        .where(followed_id: follow_params[:followed_id])[0]

        if @follow.destroy 

        end
    end

    def followers 
        @followers = User.find(params[:user_id]).followed
        # debugger 
        render '/api/users/followers'

    end

    def followed
        @followed = User.find(params[:user_id]).people_followed
        # debugger 
        render '/api/users/followed'
    end

    def fetchUserPictures
        
        # debugger
        @pictures = User.find(params[:user_id]).pictures.includes(:likers).includes(:author).with_attached_picture
        # json.extract! picture, :id
        # json.author picture.author.username
        # json.author_id picture.author.id
        # json.authorProfilePicture url_for(picture.author.profile_picture)
        # json.pictureUrl url_for(picture.picture)
        # json.numLikes picture.likers.length 
        render 'api/pictures/index'
    end
    
    private
    
    def selected_user
        # a lot of stuff to carry to frontend, how can it be optimized?
        
        User.includes(:followers).with_attached_profile_picture.includes(:followed).find(params[:id])
    end
    
    def user_params
        params.require(:user).permit(:username, :email, :password, :profile_picture, :background_img)
    end

    def follow_params
        params.require(:follow).permit(:follower_id, :followed_id)
    end
end
