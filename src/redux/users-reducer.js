const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://thumbs.dreamstime.com/z/happy-kids-boy-play-swim-guard-lifeguard-sea-funny-child-boy-lifebuoy-show-thumbs-up-sign-happy-kids-boy-play-196171410.jpg',
            followed: false,
            fullName: 'Denys',
            status: 'I am a boss',
            location: {city: 'Wroclaw', country: 'Poland'}
        },
        {
            id: 2,
            photoUrl: 'https://static3.depositphotos.com/1003827/178/i/600/depositphotos_1788160-stock-photo-mad-programmer.jpg',
            followed: true,
            fullName: 'Yevhenii',
            status: 'Sensei',
            location: {city: 'Bryton', country: 'England'}
        },
        {
            id: 3,
            photoUrl: 'https://www.icevirtuallibrary.com/pb-assets/journal%20news/2020/Green-construction-1637592067220.jpg',
            followed: false,
            fullName: 'Sasha',
            status: 'Engineer',
            location: {city: 'Kharkiv', country: 'Ukraine'}
        },
    ],
    newPostText: 'it-kamasutra.com'
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;