import * as React from 'react'
import { PostsQuery } from "../../generated/graphql";

interface Props {
    data: PostsQuery
}

const className = 'PostList'

const PostList: React.FC<Props> = ({ data }) => (
    <div className={className}>
        <h3>Posts</h3>
        <ol>
            {!!data.posts && data.posts.map(post => (
                <li>Title: <p>{ post.title }</p></li>
            ))}
        </ol>
    </div>
)

export default PostList