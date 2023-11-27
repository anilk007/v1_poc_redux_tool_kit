import React from 'react';

import SelectedPostsSelector from './selector/selected-posts-selector';

import { connect } from 'react-redux';

const SelectedPosts = (props) => {

    return (
        <ul>
            {

                props.posts.map( post => {
                    return <li key={post.id} > {post.id} {post.title} </li>
                })
            }
        </ul>
    );
};

const mapStateToProps = state => {
    
    const posts = SelectedPostsSelector(state);
    return {
        posts
    };

};



export default connect(mapStateToProps)(SelectedPosts)