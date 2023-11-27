import { createSelector } from 'reselect'
import _ from 'lodash';

const postsSelector = state => state.postsSliceReducer.postsArray;
const selectedPostsSelector = state => state.postsSliceReducer.selectedIDs;

const getSelectedPosts = (postsArray, selectedIDs) => {

    const selectedPosts = _.filter(postsArray[0], post => 
        _.includes(selectedIDs, post.id));

    return selectedPosts;


}

//=========================

export default createSelector (
    postsSelector,
    selectedPostsSelector,
    getSelectedPosts
);


