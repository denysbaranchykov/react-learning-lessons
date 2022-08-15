import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountUsersAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
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

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchStateToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalCountUsersAC(totalCount));
        },
    }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(UsersContainer);