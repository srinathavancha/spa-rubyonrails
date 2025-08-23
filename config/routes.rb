Rails.application.routes.draw do
  root "dashboard#index"
  get '/dashboard', to: "dashboard#index"
  resources :users, only: [:index, :new, :create, :show, :edit, :update]
  resources :sessions, only: [:new, :create, :destroy]
  resources :products
  get '/contact-us', to: 'contact_us#new'
  resources :contact_us, only: [:new, :create], path: '/contact-us'


  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/api/session_status', to: 'sessions#status'

  namespace :api do
    namespace :v1 do
      get 'grants', to: 'grants#index'
    end
  end
  # Catch-all route for unmatched paths — placed last
  match '*unmatched', to: 'application#route_not_found', via: :all
end
