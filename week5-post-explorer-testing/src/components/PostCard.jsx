import { useState } from "react";

function PostCard({ post }) {

const [showMore,setShowMore]=useState(false);

return(

<div className="post-card">

<h2>{post.title}</h2>

<p>

{showMore

? post.body

: `${post.body.slice(0,100)}...`

}

</p>

<button
onClick={()=>setShowMore(!showMore)}
>

{showMore?"Show Less":"Read More"}

</button>

</div>

)

}

export default PostCard;