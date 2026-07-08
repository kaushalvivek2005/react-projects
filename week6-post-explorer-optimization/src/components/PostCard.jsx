import { memo, useState } from "react";

function PostCard({ post }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="post-card">
      <h2>{post.title}</h2>

      <p>
        {showMore
          ? post.body
          : `${post.body.slice(0, 100)}...`}
      </p>

      <button
        onClick={() => setShowMore(!showMore)}
        aria-expanded={showMore}
        aria-label={
          showMore
            ? "Show less content"
            : "Read full post"
        }
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </article>
  );
}

export default memo(PostCard);