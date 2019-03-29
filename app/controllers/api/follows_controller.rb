class Api::FollowsController < ApplicationController

    def create 

        @follow = Follow.new(user_params)
        if @follow.save
            # render 'api/users/show';
        else
            
            render json: ['Nope. Wrong credentials!'], status: 401
        end

    end


    def destroy 

    end

    def user_params
        params.require(:follow).permit(:followed_id, :follower_id)
    end

end