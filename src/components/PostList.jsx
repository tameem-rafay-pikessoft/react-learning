import style from './PostList.module.css';
import Post from './Post';
import NewPost from '../components/NewPost';
import { useState } from 'react';
import Modal from './Modal';
function PostList() {
    const [enteredBody, setEnteredBody] = useState('initial body');
    const [enteredAuthor, setEnteredAuthor] = useState('initial Author name');
    function onBodyChanged(event) {
        setEnteredBody(event.target.value);
    }
    function onAuthorChange(event) {
        setEnteredAuthor(event.target.value);
    }
    return (
        <>
            <Modal>
                <NewPost onBodyChanged={onBodyChanged} onAuthorChange = {onAuthorChange}/>
            </Modal>
            <ul className={style.posts}>
                <Post author="tameem" body={enteredBody} />
                <Post author="usman" body= {enteredAuthor} />
            </ul>
        </>
    )

}

export default PostList;