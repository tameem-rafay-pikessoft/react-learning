import style from './PostList.module.css';
import Post from './Post'
function PostList() {
    return (
        <ul className =  {style.posts}>
            <Post author="tameem" body="some content here" />
            <Post author="usman" body="some content for usman" />
        </ul>
    )

}

export default PostList;