Rails.application.routes.draw do
	namespace :api, defaults: {format: :json} do
		resources :users, only: [:index, :show, :create]
		resources :teachers, only: [:index, :show]
		resources :languages, only: [:index, :show]
		resources :lessons, only: [:index, :show]
		resources :bookings, only: [:index, :show, :create]
		resource :session, only: [:create, :destroy]
	end
	root to: 'static_pages#root'
end
