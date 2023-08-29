import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () =>{
    const {posts,loading }= useContext(AppContext);

    return (
        <div className="w-11/12 max-w-[670px] py-8 h-screen flex flex-col gap-y-7 mt-[66px] justify-center items-center">
        {
            loading ? (<Spinner/>) : (
                posts.length === 0 ? (
                    <div>No Post Found</div>
                ) : (posts.map( (post) => (
                    <div key={post.id}y> 
                        <p className='font-bold text-lg'>{post.title}</p>
                        <p className="text-sm mt-[4px]">
                            By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                        </p>
                        <p className="text-sm mt-[4px]">Posted on {post.date}</p>
                        <p className="text-md mt-[14 px] ">{post.content}</p>
                        <div className="gap-x-3 flex">
                            {post.tags.map((tag,index) => {
                                return <span key={index} className="text-blue-700 underline font-bold text-[10px] mt-[5 px]]">{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                )))
            )
        }
    
        
        </div>
    )
}

export default Blogs