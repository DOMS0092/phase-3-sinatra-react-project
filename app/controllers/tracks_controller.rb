class TracksController < ApplicationController

  # GET: /tracks
  get "/tracks" do
  Track.all.to_json(include: :album)
  end

  # POST: /tracks
  post "/tracks" do
  end

  # GET: /tracks/5
  get "/tracks/:id" do
  end

  # PATCH: /tracks/5
  patch "/tracks/:id" do
  end

  # DELETE: /tracks/5/delete
  delete "/tracks/:id" do
  end
end
