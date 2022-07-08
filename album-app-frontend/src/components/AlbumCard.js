import {Link} from "react-router-dom"





const AlbumCard = ({album}) => {
  return (
    <div>
        
       <h2>Album Title: <Link to={`/albums/${album.id}`}>{album.title}</Link></h2> 
       <h3>Artist: {album.artist}</h3> 
       <h3>Cd Total Time: {album.total_time}</h3> 
       <h3>Release Year: {album.release_year}</h3> 
       <hr />

  
    </div>

  )
}

export default AlbumCard