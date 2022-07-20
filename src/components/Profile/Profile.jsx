import MyPosts from './MyPosts/Myposts';
import s from './Profile.module.css';

const Profile = () => {
    return   (
    <div>
    <div>
    <img src ='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>)
}

export default Profile;