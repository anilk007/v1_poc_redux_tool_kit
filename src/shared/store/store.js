import { configureStore } from '@reduxjs/toolkit';

import postsSliceReducer from '../../viewposts/postsSlice'

const store = configureStore({
    reducer: {
        postsSliceReducer: postsSliceReducer

    }
});


export default store;