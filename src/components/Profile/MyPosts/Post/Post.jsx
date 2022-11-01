import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-monster-square-avatar-funny-cartoon-monster-zombie-face-vector-halloween-monster-square-avatar-175918631.jpg'/>
            {props.message}
            <div>
                {props.likecount} {}
                <span>likes</span>
            </div>
        </div>
    )
}

export default Post;