import React from 'react';

import { useDispatch } from 'react-redux';

import useFetch from '../shared/custom_hooks/useFetch';

import { addPosts, addToSelectedIDS } from "../viewposts/postsSlice";

const AllPosts = (props) => {

    console.log("fruits :", props.fruits);

    const dispatch = useDispatch()

    let url = "https://jsonplaceholder.typicode.com/posts";
    let method = "get";
    let headers = null;

    const { loading, error, result } = useFetch(url, method, headers);

    //================

    React.useEffect(() => {

        console.log("result====>", result);
        console.log("error====>", error);

        if (error !== null) {
           console.log(" AllPosts error====>", error);
        }

        if (result !== null) {
            //  call reducer
            dispatch(addPosts(result));
        }

    }, [result, dispatch, error])

    //=================
    return (<>

        {loading && <div>Loading ...</div>}
        {error && <p className="error">{error.message}</p>}

        <ul>
            {result && result.length}
            {result && result.data}

            {result && result.map((post) => {
                return (
                    <li key={post.id} className='list'>

                        <input type="Checkbox" id="filled-in-box"
                            onChange={() => dispatch(addToSelectedIDS(post.id))}  >

                        </input>

                        {/* <span className='repo-text'>{repo.userId} </span> */}
                        <span className='repo-description'>{post.id}</span>

                        <span className='repo-text'>{post.title} </span>

                        <span className='repo-description'>{post.body}</span>


                    </li>
                );
            })}



        </ul>






    </>);
}

export default AllPosts;