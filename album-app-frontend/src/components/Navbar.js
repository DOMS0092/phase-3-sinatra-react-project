import { NavLink } from "react-router-dom"

const style = {
    width: "60%",
    margin: "5% 0 10%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "rgb(115 167 159)",
    fontWeight: "bold",
    verticalAlign: "center",
    
}
const Navbar = () => {
    return (
        <div>
            <NavLink
                activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>
         <NavLink
                activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/albums"
            >Albums</NavLink>
        <NavLink
                activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/albums/new"
            >New Album</NavLink>
        </div>
    )
}
export default Navbar