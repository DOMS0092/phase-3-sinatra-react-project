import { useState, useEffect } from "react" 
import { useHistory } from "react-router-dom"

const EditAlbum = ({albumObj, handleUpdate, setAlbumObj, setEditMode}) => {
    const [album, setAlbum] = useState({
        id: albumObj.id,
        title: albumObj.title,
        artist: albumObj.artist,
        total_time: albumObj.total_time,
        release_year: albumObj.release_year
     

    });
    const history = useHistory()

    const handleChange = (e) => {
        setAlbum({
            ...album,
            [e.target.name] : e.target.value
        })

    }

    const handleSubmit = e => {
        e.preventDefault()
        

        fetch(`http://localhost:9393/albums/${album.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(album)
        })
        .then((resp) => {
            if(resp.ok){

                resp.json()
                .then(data => { 
                    setAlbumObj(data)
                    setEditMode(false)

                })

            }else{
                resp.json()
                .then(error =>alert(error))

            }
        })
    }

  return (
      <>
    <h3>Create a new Album</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title</label>
        <input onChange={handleChange} type="text" name="title" value={album.title} required/><br />

        <label htmlFor="artist">Artist</label>
        <input onChange={handleChange} type="text" name="artist" value={album.artist} required/><br />

        <label htmlFor="total_time">Total Time</label>
        <input onChange={handleChange} type="number" name="total_time" value={album.total_time} required/><br />

        <label htmlFor="release_year">Release Year</label>
        <input onChange={handleChange} type="number" name="release_year" value={album.release_year} required/><br />

        <input type="submit" value="Updated Album" />
        
    </form>
    </>
  )
}

export default EditAlbum