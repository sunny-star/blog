import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import Navbar from "../components/Navbar"
import { UserContext } from "../context/UserContext"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true })
            // console.log(res.data)
            setUser(res.data)
            navigate("/")

        }
        catch (err) {
            setError(true)
            console.log(err)

        }

    }


    return (
        <>
            <Navbar />

            <div className="w-full flex justify-center items-center h-[80vh] bg-gradient-to-b from-blue-100 to-blue-400 ">
                <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl font-bold text-left">Log in to your account</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" className="w-full px-4 py-2 border-2 border-black outline-0" placeholder="Enter your email" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-4 py-2 border-2 border-black outline-0" placeholder="Enter your password" />
                    <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Log in</button>
                    {error && <h3 className="text-red-500 text-sm ">Something went wrong while login</h3>}
                    <div className="flex justify-center items-center space-x-3">
                        <p>New Here?</p>
                        <p className="text-gray-300 hover:text-black"><Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login