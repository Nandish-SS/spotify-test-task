class HomeController < ApplicationController
  def index
    render(:index, layout: 'reports')
  end
end
