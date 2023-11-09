import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
           <Sidebar/>
           <Navbar/>
           <div className="homeContainer">container</div>
        </div>
    )
}
export default Home