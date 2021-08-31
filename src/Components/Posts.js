import React from 'react'

const Posts = ({posts, loading}) => {
    if(loading) {
        <h1>Loading...</h1>
    }
    
    return(
        <div>
            {
                posts.map((post) => 
                <h6 key={post.id}>
                    {post.title}
                </h6>)
            }

        </div>
    )
}

export default Posts