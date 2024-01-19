class ApplicationController < ActionController::API
  include ActionController::MimeResponds
  include Devise::Controllers::Helpers

  before_action :authenticate_user!

  respond_to :json
end
