import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa6";



const Footer = () => {
    return (
        <>

            <div className="mt-2 w-full  bg-gray-900 px-16  flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-2 ">

                <div className="flex flex-row md:px-32 px-12  md:flex-col text-white">
                    <p className="flex flex-row  mt-2 "><a href="https://www.instagram.com/sunny_chiluka07?igsh=eGVjZDA2enF1bXo4"><FaInstagram size={20} /></a>&nbsp;Instagram</p>&nbsp;&nbsp;
                    <p className="flex flex-row  mt-2 "><a href="mailto:sunnysunny968667@gmail.com"><HiOutlineMail size={20} /></a>&nbsp;Gmail</p>&nbsp;&nbsp;
                    <p className="flex flex-row  mt-2 "><a href="https://www.facebook.com/profile.php?id=100025448063447&mibextid=JRoKGi"><FaFacebook size={20} /></a>&nbsp;Facebook</p>


                </div>

                <div className="flex flex-row mt-4 md:px-32 px-12 md:flex-col text-white">
                    <p className="flex flex-row  mt-2 "><a href="https://www.linkedin.com/in/sunnychiluka/"><FaLinkedin size={20} /></a>&nbsp;LinkedIn</p>&nbsp;&nbsp;
                    <p className="flex flex-row  mt-2 "> <a href="'https://github.com/sunny-star'"><FaGithub size={20} /></a>&nbsp;Github</p>&nbsp;&nbsp;
                    <p className="flex flex-row  mt-2 "><a href="https://wa.me/9676002081"><FaWhatsapp size={20} /></a>&nbsp;Whatsapp</p>


                </div>


            </div>
            <p className="py-3  text-center text-white bg-gray-900 text-sm">Built with 💖 by <button className="text-lg text-bold"> SUNNY</button></p>
        </>
    )
}

export default Footer
