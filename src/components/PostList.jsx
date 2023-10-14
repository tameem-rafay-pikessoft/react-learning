import style from './PostList.module.css';
import Post from './Post';
import NewPost from '../components/NewPost'
function PostList() {
    return (
        <>
            <NewPost />
            <ul className={style.posts}>
                <Post author="tameem" body="some content here" />
                <Post author="usman" body="some content for usman" />
            </ul>
        </>
    )

}

export default PostList;