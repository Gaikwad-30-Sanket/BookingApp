import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

const Navbar =() => {

    const{user} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleClick = () => {
        
          navigate("/login");
        
      };

      const handleClick2 = ()=>{
        navigate("/register");
      }
    return (
        <div className="navbar">
            <div className="navContainer">
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="logo">Booking.com</span>
            </Link>
                {user? user.username : <div className="navItems">
                    <button onClick={handleClick2} className="navButton">Register</button>
                    <button onClick={handleClick} className="navButton">Login</button>
               </div>}
            </div>
         </div>

    ) 
}
export default Navbar