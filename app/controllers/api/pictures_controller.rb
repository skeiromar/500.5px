class Api::PicturesController < ApplicationController

    def index
        @pictures = Picture.includes(:likers).includes(:author).with_attached_picture.all
        # @likers = @pictures.likers.length
    end

    def create
        @picture = Picture.new(picture_params)

        # debugger
        # @picture.author_id = 8
        if @picture.save
             @likers = @picture.likers

            render :show
        else
            render json: @picture.errors.full_messages, status: 401
        end
    end
        
    def update
        
        @picture = Picture.find(params[:id])
        if @picture && @picture.update_attributes(picture_update_params)
            @likers = @picture.likers

            render :show
        elsif !@picture
            render json: ['Could not locate picture'], status: 400
        else
            render json: @picture.errors.full_messages, status: 401
        end
    end
    
    def show
        @picture = Picture.with_attached_picture.includes(:author).includes(:likers).find(params[:id])
        @likers = @picture.likers
        
    end
    
    
    def destroy
        @picture = Picture.find(params[:id])
        
        if @picture
            @picture.destroy
            # render :show
        else
            render json: ['Could not find picture'], status: 404
        end
    end

    def like 
        @like = Like.new(like_params)
        @like.likable_type = "Picture"
        if @like.save
            
            # render 'api/users/show';
            #  we don't have a route or jbuilder for show yet
            render json: @like.id
        else
            
            render json: ['could not process the like'], status: 401
        end
    end

    def unlike 
        @like = Like.where(likable_id: params[:picture_id])
                    .where(author_id: like_params[:author_id])[0]
        
        if @like.destroy 

        end
    end
    
    private
    
    def selected_picture
        # .includes(:followers).includes(:followed)
        Picture.find(params[:id])
    end
    
    def picture_params
        params.require(:picture).permit(:title, :description, :picture, :author_id)
    end

    def picture_update_params 
        params.require(:picture).permit(:title, :description)
    end

    def like_params
        params.require(:like).permit(:author_id, :likable_id, :likable_type)
    end
    
    

end
