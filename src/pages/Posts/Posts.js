import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className='w-1/2 mx-auto'>
          {
            posts.map(post => <div className=" card m-4 bg-base-100 shadow-xl">
            <figure><img src={post.image} alt="Shoes" /></figure>
            <div className="card-body">
              
              <p>{post.postData}</p>
              <div className="card-actions justify-end">
              <Link to={`/productdetails/${post._id}`}>
              <button  className="btn btn-primary">View Details</button>
              </Link>
              </div>
            </div>
          </div>)
          }
        </div>
    );
};

export default Posts;