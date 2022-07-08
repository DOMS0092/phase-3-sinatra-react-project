class AlbumsController < ApplicationController

  # GET: /albums
  get "/albums" do
    Album.all.to_json(include: :tracks)
  end

  # POST: /albums
  post "/albums" do
    album = Album.create(title: params[:title], release_year: params[:release_year], total_time: params[:total_time], artist: params[:artist])
    if album.id 
      album.to_json(include: :tracks)
    else 
      {error: album.errors.full_messages.to_sentence}.to_json
    end
  end
  get "/albums/longest-title" do
    album = Album.longest_title
    album.to_json(include: :tracks)
  end

  # GET: /albums/5
  get "/albums/:id" do
    album = Album.find_by_id(params[:id])
    if album 
      album.to_json(include: :tracks)
      
  else 
    {error: "album can not be found"}.to_json
  end
end

  # PATCH: /albums/5
  patch "/albums/:id" do
    album = Album.find_by_id(params[:id])
    if album && album.update(title: params[:title], release_year: params[:release_year], total_time: params[:total_time], artist: params[:artist])
      album.to_json(include: :tracks)
    else 
      {error: album.errors.full_messages.to_sentence}.to_json
    end
  end

  # DELETE: /albums/5/delete
  delete "/albums/:id" do
    album = Album.find_by_id(params[:id])
    if album 
      album.destroy
      {message: "album successfully destroyed"}.to_json
      
  else 
    {error: "album can not be found"}.to_json
  end
  end

  #Get: /albums/longest-title
end
