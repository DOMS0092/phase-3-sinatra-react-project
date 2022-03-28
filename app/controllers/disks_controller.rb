class AlbumsController < ApplicationController

  # GET: /albums
  get "/albums" do
  Album.all.to_json
  end

  # GET: /albums/new
  get "/albums/new" do
  end

  # POST: /albums
  post "/albums" do
    @album = Album.create(params)
    if @album.id
      serialized_album
    else
      @album.errors.full_messages.to_sentence
  end

  # GET: /albums/5
  get "/albums/:id" do
    find_album
    if @plant
      serialized_album
    else
      {errors: "Record not found with id #{params['id']}"}.to_json
  end

  # GET: /albums/5/edit
  get "/albums/:id/edit" do
  end

  # PATCH: /albums/5
  patch "/albums/:id" do
    find_album
  if @album && @album.update(params)
    serialized_album
  elsif !@album
    {errors: "Record not found with id #{params['id']}"}.to_json
  else
    {errors: @album.errors.full_messages.to_sentence}.to_json
  end
end 

  # DELETE: /albums/5/delete
  delete "/albums/:id" do
    find_album
    if @album&.destroy
      {messages: "Record successfully destroyed"}.to_json
  end
end
