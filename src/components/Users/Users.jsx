import React from "react";
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items
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
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    };

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={this.props.currentPage === p ? styles.selectedPage : null}
                                 onClick={(e) => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}
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
}

export default Users;