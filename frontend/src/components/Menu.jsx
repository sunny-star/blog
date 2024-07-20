import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import { Link, useNavigate } from "react-router-dom"


const Menu = () => {
    const { user } = useContext(UserContext)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const res = await axios.get(URL + "/api/auth/logout", { withCredentials: true })
            console.log(res)
            setUser(null)
            navigate("/login")

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="bg-gradient-to-b from-gray-700 to-red-500 w-[200px] z-10 flex flex-col items-center absolute  py-8 top-20 right-6 md:right-32 rounded-md p-8 space-y-4">
            {!user && <h3 className="text-black bg-yellow-200 rounded-lg px-4  py-2 text-sm hover:text-black cursor-pointer"><Link to="/login">Login</Link></h3>}
            {!user && <h3 className="text-black bg-yellow-400 rounded-lg px-4 py-2 text-sm hover:text-black cursor-pointer"><Link to="/register">Register</Link></h3>}
            {user && <h3 className="text-white bg-blue-500 rounded-lg px-4 py-2 text-sm hover:text-black cursor-pointer"><Link to={"/profile/" + user._id}>Profile</Link></h3>}
            {user && <h3 className="text-white  bg-blue-500 rounded-lg px-4 py-2 text-sm hover:text-black cursor-pointer"><Link to="/write">Create</Link></h3>}
            {user && <h3 className="text-white bg-blue-500 rounded-lg px-4 py-2 text-sm hover:text-black cursor-pointer"><Link to={"/myblogs/" + user._id}>My blogs</Link></h3>}
            {user && <h3 onClick={handleLogout} className="text-black bg-yellow-400 px-3 py-2 rounded-lg text-lg hover:bg-red-900 cursor-pointer">Logout</h3>}

        </div>
    )
}

export default Menu