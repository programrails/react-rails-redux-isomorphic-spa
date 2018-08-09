# Be sure to restart your server when you modify this file.
require "#{Rails.root}/lib/appstate_renderer"

Rails.application.config.react.server_renderer = React::ServerRendering::AppstateRenderer
