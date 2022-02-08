import { PostCard } from "../postCard";
import './style.css'

export const Posts = ({ posts }) => (
    <div className="posts">
        {posts.map(post =>
            <PostCard
                cover={post.cover}
                id={post.id}
                title={post.title}
                body={post.body}
                key={post.id}
            />
        )}
    </div>
)