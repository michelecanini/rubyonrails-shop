class Users::SessionsController < Devise::SessionsController
  include RackSessionsFix
  respond_to :json

  private  
  
  def respond_with(resource, _opts = {})
  render json: {
    status: { 
      code: 200, 
      message: 'Accesso effettuato con successo.',
    },
    data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
  }, status: :ok
end  
  
  def respond_to_on_destroy
    
    if current_user
      render json: {
        status: 200,
        message: 'Disconnessione effettuata con successo.'
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "Non è stata trovata una sessione attiva."
      }, status: :unauthorized
    end
  end
end
