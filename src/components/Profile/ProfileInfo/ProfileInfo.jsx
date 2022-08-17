import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
  return (
    <div>
      <div>
        <img src='https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60'  width="200" />
      </div>
      <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large}/>
        ava + description
      </div>
    </div>)
}

export default ProfileInfo;