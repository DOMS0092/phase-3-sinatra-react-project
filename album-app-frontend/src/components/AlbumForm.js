import { useState, useEffect } from "react" 
import { useHistory } from "react-router-dom"



const AlbumForm = () => {
    const [album, setAlbum] = useState({
        title: "",
        artist: "",
        total_time: "",
        release_year: ""
     

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
        debugger
        if([album.title, album.artist, album.total_time, album.release_year].some(val => val.trim() === "")) {
            alert("You must fill out all of the information Please!")
        }

        const newAlbum = {
            title: album.title,
            total_time: album.total_time,
            artist: album.artist,
            release_year: album.release_year
        }

        fetch("http://localhost:9393/albums", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(newAlbum)
        })
        .then(() => history.push("/albums"))
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

        <input type="submit" value="Create An Album" />
        
    </form>
    </>
  )
}

export default AlbumForm