import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () =>{
    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    return(
        <div className="home">
            {error && <div>could not fetch the data for that resource</div>}
           {blogs && <BlogList blogs={blogs} title="All blogs" />}
           {isPending && <div>Loading...</div>}
        </div>
    );
}
export default Home;