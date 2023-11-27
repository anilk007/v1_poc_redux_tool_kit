import React from 'react';
import AllPosts from '../viewposts/AllPosts';

import SelectedPosts from '../viewposts/SelectedPosts';

const ViewPosts = () => {

    const fruits = ["apple", "banana", "orange"];

    return (<>
        <h1>View Posts Component</h1>

        <SelectedPosts />

        <AllPosts fruits={fruits} />


    </>);
}

export default ViewPosts;