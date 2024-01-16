class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  validate :custom_password_validation

  def custom_password_validation
    if password.present? and not password.match(/\A(?=.*[A-Z])(?=.*[!@#$&*])/)
      errors.add :password, 'La password deve contenere almeno una lettera maiuscola e un carattere speciale'
    end
  end
end
