import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: '15' },
            { id: 2, message: "It's my first post", likesCount: '20' },
            { id: 3, message: "Blabla", likesCount: '20' },
            { id: 4, message: "dada", likesCount: '20' }
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Andrey" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Sasha" },
            { id: 5, name: "Viktor" },
            { id: 6, name: "Valera" },
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How is your it-kamasutra" },
            { id: 3, message: "Yo" },
            { id: 4, message: "Yo" },
            { id: 5, message: "Yo" },
        ]
    },
    sideBar: {
        friends: [
            {
                name: 'Denys',
                name: 'Zheka'
            }
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (postText) => {
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state);
}

export default state;