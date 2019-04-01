class Api::LikesController < ApplicationController

    def create 
        # current uri will tell us whether the likable type is Picture or Comment
        # current_uri = request.env['PATH_INFO']
        # current_uri.include?('pictures/')   # or something
        # debugger
        @like = Like.new(like_params)
        if @like.save
            # render 'api/users/show';
            #  we don't have a route or jbuilder for show yet
            render :show
        else
            
            render json: ['could not process the like'], status: 401
        end

    end


    def destroy 
        
    end

    def like_params
        params.require(:like).permit(:author_id, :likable_id)
    end

end