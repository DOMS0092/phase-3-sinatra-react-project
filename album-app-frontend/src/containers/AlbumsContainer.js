import {useState, useEffect} from "react"
import AlbumsList from "../components/AlbumsList"

const AlbumsContainer = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("http://localhost:9393/albums")
                const data = await resp.json()
                setAlbums(data)
                setLoading(false)
            } catch (error) {
                alert(error)

            }
        }
        fetchData()
    }, []);

    if (!!loading) return <h1>Loading...</h1>
  return (
    <>
            <h2>The Albums</h2>
            <AlbumsList albums={albums} />
    </>
  )
}

export default AlbumsContainer