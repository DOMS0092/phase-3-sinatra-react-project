import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const AlbumDetails = () => {
    const [album, setAlbum] = useState(null) 
    const [loading, setLoading] = useState(true);
   const {id} = useParams()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`http://localhost:9393/albums/${id}`)
                const data = await resp.json()
                setAlbum(data)
                setLoading(false)
            } catch (error) {
                alert(error)

            }
        }
        fetchData()
    }, []);

    if (!!loading) return <h1>Loading...</h1>
  return (
    <div>
    <h2>Album Title: {album.title}</h2> 
    <h2>Cd Total Time: {album.total_time}</h2> 
    <h2>Artist: {album.artist}</h2> 
    <h2>Release Year: {album.release_year}</h2> 
    {album.tracks.map(track => <>
        <h3>Song Title: {track.title}</h3>
        <h4>Genre: {track.genre}</h4>
        <h4>Explicit: {track.explicit}</h4>
        <h4>Track Length: {track.track_length}</h4>
        
    </>)}
    <hr />
 </div>
  )
}

export default AlbumDetails
