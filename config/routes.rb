Rails.application.routes.draw do
	namespace :api, defaults: {format: :json} do
		resources :users, only: [:index, :create]
		resources :teacher_details, only: [:index, :show]
	    resource :session, only: [:create, :destroy]
	end
	root to: 'static_pages#root'
end
