# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
	validates :email, :session_token, presence: true, uniqueness: true
	validates :name, :password_digest, presence: true
	validates :password, length: {minimum: 6}, allow_nil: true
	after_initialize :ensure_session_token 
	attr_reader :password

	has_one :teacher_detail,
		primary_key: :id,
		foreign_key: :teacher_id,
    class_name: 'TeacherDetail'

	def self.generate_session_token
		SecureRandom::urlsafe_base64
	end

	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end

	def reset_session_token!
		self.session_token = User.generate_session_token
		self.save!
		self.session_token
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		if user && user.is_password?(password)
			user
		else
			nil
		end
	end
		

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)

	end

end
