class User < ApplicationRecord
  
  include Devise::JWT::RevocationStrategies::Allowlist
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable,
  :jwt_authenticatable, jwt_revocation_strategy: self
  
  # Append payload to JWT
  # def jwt_payload
  #   { 'foo' => 'bar' }
  # end
end
