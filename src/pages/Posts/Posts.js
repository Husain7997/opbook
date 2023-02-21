import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Post from './Post';

const Posts = () => {
    const { isLoading,refetch, error, data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
          fetch('http://localhost:5000/posts')
          .then(
            (res) => res.json(),
          ),
      })
      refetch()
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
          {
            posts.map(post => <div className="card m-4 bg-base-100 shadow-xl">
            <figure><img src={post.image} alt="Shoes" /></figure>
            <div className="card-body">
              
              <p>{post.postData}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-teal-400 btn-primary">Show Details</button>
              </div>
            </div>
          </div>)
          }
        </div>
    );
};

export default Posts;