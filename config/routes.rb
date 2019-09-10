Rails.application.routes.draw do
	namespace :api, default: {format: :json} do
		resources :users, only: [:index, :create]
	    resource :session, only: [:create, :destroy]
	end
	root to: 'static_pages#root'
end
