class Devise::PasswordsController < DeviseController
  def create
    respond_to do |format|
      format.html { redirect_to new_user_session_path, notice: 'Richiesta elaborata correttamente' }
      format.json { render json: { message: 'Richiesta elaborata correttamente' } }
    end
  end
end
