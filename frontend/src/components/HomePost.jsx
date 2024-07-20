/* eslint-disable react/prop-types */
import { IF } from "../url"



const HomePosts = ({ post }) => {
    return (
        <div className=" flex flex-col  md:w-11/12 items-center justify-center md:bg-gray-100 mt-8   rounded-lg  shadow-lg shadow-gray-800 outline-0  ">

            <div className='flex flex-col px-0 md:py-4 items-center justify-center '>
                <img src={IF + post.photo} alt="" className=' rounded-xl w-screen h-60  md:w-96 md:h-64 ' />
            </div>

            <div>
                <h1 className="text-xl font-bold md:mb-2  px-2 py-2 text-center mb-1 md:text-2xl">{post.title}</h1>
            </div>
            <div className="flex mb-2 text-sm font-semibold text-gray-400 items-center justify-between  md:mb-4">
                <p className='md:px-32 pr-24'>@{post.username}</p>&nbsp;
                <div className="flex  space-x-2 md:px-32 text-sm px-4">
                    <p>{new Date(post.updatedAt).toString().slice(4, 15)}</p>
                    <p>{new Date(post.updatedAt).toString().slice(16, 21)}</p>
                </div>
            </div>

            <p className="flex text-base px-4  md:px-6 py-2 items-center justify-center  md:text-xl">{post.desc.slice(0, 200) + " ...Read more"}</p>

        </div>


    )
}

export default HomePosts

