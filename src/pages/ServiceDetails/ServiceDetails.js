import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
  const service= useLoaderData([]);
  const {user}=useContext(AuthContext)
    const {_id, title, description, picture, prize}=service;
    return (
        
        <div className="">
        <figure><img src={picture} alt="service pic" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 >Prize: {prize} </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/review`}><button  className="btn btn-primary">Review</button></Link>
          </div>
        </div>
        {/* <Review ></Review> */}
    <AddReview service={service} title={title} user={user}></AddReview>
      </div>
      
    );
};

export default ServiceDetails;