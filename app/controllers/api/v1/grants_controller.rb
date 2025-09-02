module Api
  module V1
    class GrantsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        grants = [
          "grant_all",
          "grant_platform_all",
          "grant_product_all",
          "grant_access_member"
        ]

        rules = {
          "showUserProfile" => ["grant_all", "grant_platform_all", "grant_access_member"],
          "accessAdminPanel" => ["grant_all"],
          "accessProductAdmin" => ["grant_all","grant_product_all"],
          "accessPlatformSettings" => ["grant_all","grant_platform_all"],
          "accessMemberDashboard" => ["grant_all","grant_access_member"]
        }

        render json: { grants: grants, rules: rules }, status: :ok
      end
    end
  end
end
