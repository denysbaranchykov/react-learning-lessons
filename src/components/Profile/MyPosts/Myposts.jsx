import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    const postsElements = props.posts.map((p, index) =>
        <Post message={p.message} likecount={p.likesCount}
              key={index}/>);
    const newPostElement = React.createRef();
    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts </h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <Field name={'newPostText'} component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({name: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;
