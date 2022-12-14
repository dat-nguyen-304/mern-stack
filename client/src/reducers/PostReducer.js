import { POSTS_LOADED_SUCCESS, POSTS_LOADED_FAIL, ADD_POST, DELETE_POST, UPDATE_POST, FIND_POST } from "../contexts/constants";


export const postReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case POSTS_LOADED_SUCCESS:
            return {
                ...state,
                posts: payload,
                postsLoading: false,
            }
        case POSTS_LOADED_FAIL:
            return {
                ...state,
                posts: [],
                postsLoading: false,
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, payload]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload)
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => post._id === payload._id ? payload : post)
            }
        case FIND_POST:
            return {
                ...state,
                post: payload
            }
        default:
            return state;
    }
}