import s from './Profile.module.css';

const Profile = () => {
    return   <div className = {s.content}>
    <div>
    <img src ='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts 
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;