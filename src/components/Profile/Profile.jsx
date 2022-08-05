import MyPosts from './MyPosts/Myposts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MypostsContainer";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>)
}

export default Profile;