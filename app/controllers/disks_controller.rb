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
  end

  # GET: /albums/5
  get "/albums/:id" do
  end

  # GET: /albums/5/edit
  get "/albums/:id/edit" do
  end

  # PATCH: /albums/5
  patch "/albums/:id" do
  end

  # DELETE: /albums/5/delete
  delete "/albums/:id" do
  end
end
