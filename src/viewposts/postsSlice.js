import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        postsArray: [],
        selectedIDs: []
    },
    reducers: {
        addPosts(state, action) {

            const receievedArray = action.payload;
            state.postsArray.push(receievedArray);

        },
        addToSelectedIDS(state, action) {

            const id = action.payload;

            let foundAt = state.selectedIDs.indexOf(id);
            if(foundAt>=0) {
                state.selectedIDs.splice(foundAt,1);
                console.log(`${id} === Found in ${state.selectedIDs.join()}`);
            }
            else {
                state.selectedIDs.push(id);
                console.log(`${id} Not Found in ${state.selectedIDs.join()}`);
            }
            
        }

    }
});


export const { addPosts, addToSelectedIDS } = postsSlice.actions

export default postsSlice.reducer;