import React from "react";
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {

    const getUsers = () => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items
                // [
                //     {
                //         id: 1,
                //         photoUrl: 'https://thumbs.dreamstime.com/z/happy-kids-boy-play-swim-guard-lifeguard-sea-funny-child-boy-lifebuoy-show-thumbs-up-sign-happy-kids-boy-play-196171410.jpg',
                //         followed: false,
                //         fullName: 'Denys',
                //         status: 'I am a boss',
                //         location: {city: 'Wroclaw', country: 'Poland'}
                //     },
                //     {
                //         id: 2,
                //         photoUrl: 'https://static3.depositphotos.com/1003827/178/i/600/depositphotos_1788160-stock-photo-mad-programmer.jpg',
                //         followed: true,
                //         fullName: 'Yevhenii',
                //         status: 'Sensei',
                //         location: {city: 'Bryton', country: 'England'}
                //     },
                //     {
                //         id: 3,
                //         photoUrl: 'https://www.icevirtuallibrary.com/pb-assets/journal%20news/2020/Green-construction-1637592067220.jpg',
                //         followed: false,
                //         fullName: 'Sasha',
                //         status: 'Engineer',
                //         location: {city: 'Kharkiv', country: 'Ukraine'}
                //     },
                // ]
            );
        });
    }}
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>)
        }
    </div>
}

export default Users;