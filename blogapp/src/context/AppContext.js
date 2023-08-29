
import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();


export default function AppContextProvider({children}) {
    const [loading,setLoading]=useState(false);
    const [posts,setPosts] = useState([]);
    const [pages,setPages] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    //data filling

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?pages=${page}`;

        try{
            const result = await fetch(url);
            const data = await result.json();
            

            setPages(data,page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        }catch(error){
        console.log("error in fetching data ");
            setPages(1);
            setPosts([]);
            setTotalPages(null);


        }
        setLoading(false);
    }

    function handlePageChange (page) {
        setPages(1);
        fetchBlogPosts(pages);

    }


    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        pages,
        setPages,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange

    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}