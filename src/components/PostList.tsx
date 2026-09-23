import Post from "./Post";
import type { Post as PostType } from "../types/Post";
import "../styles/PostList.css";

const posts: PostType[] = [
    {
        id: 1,
        title: "A Drop of Corruption",
        author: "Robert Jackson Bennett",
        content: "An eccentric detective investigates a deep political conspiracy in a unique fantasy world powered by organic technology.",
        date: "April, 2026",
    },
    {
        id: 2,
        title: "Green City Wars",
        author: "Adrian Tchaikovsky",
        content:
            "A futuristic noir thriller about an investigation told from the perspective of a hyper-intelligent raccoon servant.",
        date: "June, 2026",
    },
    {
        id: 3,
        title: "Hole in the Sky",
        author: "Daniel H. Wilson",
        content:
            "A fast-paced cosmic disaster thriller where an unlikely trio races to decode an alien message heading for Earth.",
        date: "October, 2025",
    },
];

function PostList() {
    return (
        <section className="post-list">
            <h2>Latest Posts</h2>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </section>
    );
}

export default PostList;