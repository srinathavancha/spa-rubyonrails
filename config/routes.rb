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
  # get '/contact-us', to: 'contact_us#new', as: :contact_us
  # post '/contact-us', to: 'contact_us#create', as: :contact_us
  
  # Catch-all route for unmatched paths — placed last
  match '*unmatched', to: 'application#route_not_found', via: :all
end
