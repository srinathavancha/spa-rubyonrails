RailsLiveReload.configure do |config|
  # Example configuration (optional, default watches views, assets like CSS, JS, images)

  # config.watch %r{app/views/.+\.(rb|erb|haml|slim)$}
  # config.watch %r{(app|vendor)/(assets|javascript)/\w+/(.+\.(css|js|html|png|jpg|ts|jsx)).*}, reload: :always
  # config.enabled = Rails.env.development?
end if defined?(RailsLiveReload)
