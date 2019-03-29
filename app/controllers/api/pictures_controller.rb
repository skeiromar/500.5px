class Api::PicturesController < ApplicationController

    def index
        @pictures = Picture.all
    end

    def create
        @picture = Picture.new(picture_params)
        if @picture.save
            render :show
        else
            render json: @picture.errors.full_messages, status: 401
        end
    end
        
    def update
        @picture = selected_picture
        if @picture && @picture.update_attributes(picture_params)
            render :show
        elsif !@picture
            render json: ['Could not locate picture'], status: 400
        else
            render json: @picture.errors.full_messages, status: 401
        end
    end
    
    def show
        @picture = selected_picture

    end
    
    
    def destroy
        @picture = selected_picture
        if @picture
            @picture.destroy
            render :show
        else
            render ['Could not find picture']
        end
    end
    
    private
    
    def selected_picture
        # .includes(:followers).includes(:followed)
        picture.find(params[:id])
    end
    
    def picture_params
        params.require(:picture).permit(:title, :description)
    end
    
    

end
