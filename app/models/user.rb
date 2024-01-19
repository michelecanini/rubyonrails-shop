class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, 
         :jwt_authenticatable, jwt_revocation_strategy: self,
         :authentication_keys => [:username]

  validates :username, presence: true, uniqueness: true

  validate :custom_password_validation

  def custom_password_validation
    if password.present? and not password.match(/\A(?=.*[A-Z])(?=.*[^A-Za-z0-9]).*\z/)
      errors.add :password, 'La password deve contenere almeno una lettera maiuscola e un carattere speciale'
    end
  end
end
