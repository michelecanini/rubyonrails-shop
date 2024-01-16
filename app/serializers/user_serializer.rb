class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :username, :name
end
