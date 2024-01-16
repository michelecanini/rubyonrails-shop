class Users::RegistrationsController < Devise::RegistrationsController
  include RackSessionsFix
  respond_to :json
  
  private

  def respond_with(current_user, _opts = {})
    if resource.persisted?
      render json: {
        status: {code: 200, message: 'Registrazione effettuata con successo.'},
        data: 
        UserSerializer.new(current_user).serializable_hash[:data]
        [:attributes]
      }
    else
      render json: {
        status: {message: "Non è stato possibile creare l’utente. 
        #{current_user.errors.full_messages.to_sentence}"}
      }, status: :unprocessable_entity
    end
  end
end
