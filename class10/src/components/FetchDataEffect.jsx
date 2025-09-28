import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setPost(data)
        };

        fetchData();

    }, []);



    return (
        <div>
            <h2>First Post</h2>
            {post.length > 0 ? <p>{post[0].title}</p> : <p>No post found</p>}
        </div>
    );
};

export default FetchDataEffect;
