import {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import EditAlbum from './EditAlbum'

const AlbumDetails = ({}) => {
    const [editMode, setEditMode] = useState(false);
    const [album, setAlbum] = useState(null) 
    const [albumObj, setAlbumObj] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    const history = useHistory()

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
    

    const handleClick = (e) => { 
        if (e.target.name === "delete") {
            fetch(`http//localhost:3001/albums/${setAlbumObj.id}`,
            { method: "DELETE"
            }) 
            .then(() => history.push("/albums"))

        } else {
            setEditMode(true)

        }
     }

    if (!!loading) return <h1>Loading...</h1>
  return (
    <div>

    { !editMode ? ( 
       <> <h2>Album Title: {album.title}</h2> 
    <h2>Cd Total Time: {album.total_time}</h2> 
    <h2>Artist: {album.artist}</h2> 
    <h2>Release Year: {album.release_year}</h2> 
    {album.tracks.map(track => <>
        <h3>Song Title: {track.title}</h3>
        <h4>Genre: {track.genre}</h4>
        <h4>Explicit: {track.explicit}</h4>
        <h4>Track Length: {track.track_length}</h4>
        
    </>)}
    </> 
    ) : (
        <EditAlbum albumObj= {album} setEditMode ={setEditMode} setAlbumObj= {setAlbum}/>
        
    )}
    <hr />
    <hr />
    <button name="edit-mode" id="edit-btn" onClick={handleClick}>Edit</button>
    <button name="delete" id="delete-btn" onClick={handleClick}>Delete</button>
    

 </div>
  )
}

export default AlbumDetails
