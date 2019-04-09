class Api::CommentsController < ApplicationController


  def index
    # Comment.where(picture_id: 23)
    @comments = Comment.includes(:author).includes(:likers).includes(:picture)
    .where(picture_id: params[:picture_id]) # Comment.where(picture_id: params[:picture_id])

  end

  def show
  end

  def new
    @comment = Comment.new
  end

  def edit
  end

  def create
    @comment = Comment.new(comment_params)
      if @comment.save
        # url_for(@comment.author.profile_picture), @comment.author.username
        render json: @comment.id
      else
      end
    end

  def unlike 
    @like = Like.where(likable_id: params[:comment_id])
      .where(author_id: like_params[:author_id])[0]
    
    if @like.destroy 

    end

  end

  def like 
    @like = Like.new(like_params)
    @like.likable_type = 'Comment'

    if @like.save

    end

  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy 

    end

  end



    def comment_params
      params.require(:comment).permit(:body, :author_id, :picture_id)
    end
    
    def like_params
      params.require(:like).permit(:author_id, :likable_id)
  end
end
