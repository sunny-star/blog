import { Link, useLocation, useNavigate } from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"



const Navbar = () => {

    const [prompt, setPrompt] = useState("")
    console.log(prompt)
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()
    const path = useLocation().pathname

    console.log(prompt)


    const showMenu = () => {
        setMenu(!menu)
    }


    const { user } = useContext(UserContext)

    return (
        <div className="pb-16">
            <div className="flex justify-between items-center w-full md:h-16 h-14 px-4  top-0 bg-red-900 text-white fixed">
                <h1 className="text-xl md:text-2xl  md:px-4 font-extrabold text-white"><Link to="/">Blog Vault </Link></h1>
                {path === "/" && <div className="flex justify-center items-center ">

                    <input onChange={(e) => setPrompt(e.target.value)} className="outline-none h-5 w-36 md:h-5  text-black md:w-80 px-0 " placeholder="Search a post" type="text" this is />&nbsp;&nbsp;&nbsp;
                    <p onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))} className=" text-white  flex cursor-pointer text-center justify-center top-2 rounded-lg  h-5 w-5  py-0 "><BsSearch size={18} /></p>


                </div>}
                <div className="hidden md:flex  pr-16 items-center justify-center ">
                    {user ? <h3><Link to="/write">Write</Link></h3> : <h3 className="pr-16 pl-5 text-lg"><Link to="/login">Login</Link></h3>}&nbsp;&nbsp;&nbsp;&nbsp;
                    {user ? <div onClick={showMenu}>
                        <p className="cursor-pointer pr-40 relative"><FaBars size={24} /></p>
                        {menu && <Menu />}
                    </div> : <h3 className="pr-20 text-lg"><Link to="/register">Register</Link></h3>}
                </div>
                <div onClick={showMenu} className="md:hidden text-lg">
                    <p className="cursor-pointer pr-3  relative"><FaBars size={24} /></p>
                    {menu && <Menu />}
                </div>

            </div>


        </div>

    )
}

export default Navbar 