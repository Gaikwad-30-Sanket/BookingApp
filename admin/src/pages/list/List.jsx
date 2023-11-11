import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = () => {
    return (
        <div classNAme="list">
            <Sidebar/>
            <div classNAme="listContainer">
                <Navbar/>
                <Datatable/>
            </div>

        </div>
    )
}
export default List