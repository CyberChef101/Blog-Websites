
import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
// import Pagination from "./components/Pagination";


function App() {
    const {fetchBlogPosts} = useContext(AppContext);

    useEffect(()=>{
      fetchBlogPosts();
    },[]);

  return (
    <div className="w-full h-full flex flex-col items-center gap-y-7 ">
    <Header/>

    <Blogs/>

    {/* <Pagination/> */}
    </div>
  );
}

export default App;
