import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    const postsElements = props.posts.map((p, index) =>
        <Post message={p.message} likecount={p.likesCount}
              key={index}/>);
    const newPostElement = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    const onePostChange = () => {
        const text = newPostElement.current.value;
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <div>
          <textarea onChange={onePostChange} ref={newPostElement}
                    value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
