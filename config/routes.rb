Rails.application.routes.draw do
  # resources :comments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  # GET /api/pictures - returns popular pictures (filtered by data/params)
  # GET /api/pictures/:id - returns picture
  # GET /api/:userId/pictures - returns all pictures for a user
  # POST /api/pictures - creates a picture
  # PATCH /api/pictures/:id - edit a picture
  # DELETE /api/pictures/:id - remove a picture

  # confirm with another.

  namespace :api, defaults: {format: :json} do

    resources :pictures, only: [:index, :show, :create, :update, :destroy] do 

      delete :unlike, to: 'pictures#unlike', as: 'unlike'
      post :like, to: 'pictures#like', as: 'like'

      resources :comments, only: [:index, :create] 

    end
    
    resources :comments, only: [:destroy] do 

      delete :unlike, to: 'comments#unlike', as: 'unlike'
      post :like, to: 'comments#like', as: 'like'

    end

    resources :likes, only: [:create, :destroy]

    resources :users do 

      # resources :follows, only: [:create, :destroy]

      resources :pictures, only: [:index]

      post :follow, to: 'users#follow', as: 'follow'
      get :fetchUserPictures, to: 'users#fetchUserPictures', as: 'fetchUserPictures'
      get :followers, to: 'users#followers', as: 'followers'
      get :followed, to: 'users#followed', as: 'followed'



      delete :unfollow, to: 'users#unfollow', as: 'unfollow'

    end

    resource :session 

  end

end
