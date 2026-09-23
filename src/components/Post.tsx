import { memo } from "react";
import type { Post as PostType } from "../types/Post";
import "../styles/Post.css";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  const isHighlighted = post.author === "Robert Jackson Bennett" || post.author === "Adrian Tchaikovsky";

  const words = post.content.split(" ");
  const preview =
    words.length > 10
      ? `${words.slice(0, 10).join(" ")}...`
      : post.content;

  const highlightedStyle = isHighlighted
    ? {
        backgroundColor: "#eff6ff",
        borderLeft: "5px solid #4576e1",
      }
    : undefined;

  return (
    <article className="post-card" style={highlightedStyle}>
      <h3>{post.title}</h3>

      <p className="post-author">By {post.author}</p>

      <p>{preview}</p>

      <time className="post-date">{post.date}</time>
    </article>
  );
}

export default memo(Post);