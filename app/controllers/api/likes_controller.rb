class Api::LikesController < ApplicationController

    #  id           :bigint(8)        not null, primary key
    #  author_id    :integer
    #  likable_type :string
    #  likable_id   :bigint(8)

    def create 
        # current uri will tell us whether the likable type is Picture or Comment
        # current_uri = request.env['PATH_INFO']
        # current_uri.include?('pictures/')   # or something
        # debugger
        @like = Like.new(like_params)
        if @like.save
            
            # render 'api/users/show';
            #  we don't have a route or jbuilder for show yet
            render json: @like.id
        else
            
            render json: ['could not process the like'], status: 401
        end

    end


    def destroy 

        @like = Like.find_by(id: params[:id])
        if @like.destroy
            
            # render 'api/users/show';
            #  we don't have a route or jbuilder for show yet
            render json: @like.id
        else
            
            render json: ['could not delete the like'], status: 401
        end
        
    end

    def like_params
        params.require(:like).permit(:author_id, :likable_id, :likable_type)
    end

end