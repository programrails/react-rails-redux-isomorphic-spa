class SpaController < ApplicationController
  def index    
    @companies = Company.all    
    id = request.path['companies/'.size+1..-1] if request.path =~ /companies\/\d/
    @company = Company.find_by id: id
  end
end
