import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: '15'},
        {id: 2, message: "It's my first post", likesCount: '20'},
        {id: 3, message: "Blabla", likesCount: '20'},
        {id: 4, message: "dada", likesCount: '20'}
    ],
};
test('new post should be added', () => {
    let action = addPostActionCreator('denys_velinghton')
    let newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(5);

});

test('after deleting length should be decremented', () => {

    let action = deletePost(1)
    let newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(3);
});

test('after deleting length should not be changed', () => {

    let action = deletePost(1000)
    let newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(4);
});
