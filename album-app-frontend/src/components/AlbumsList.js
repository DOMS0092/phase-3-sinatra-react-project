import AlbumCard from "./AlbumCard"

const AlbumsList = ({albums}) => {
  const renderAlbums = albums.map(album => <AlbumCard key={album.id} album={album}/>)
  return (
    <div>{renderAlbums}</div>
  )
}

export default AlbumsList