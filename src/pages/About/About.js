import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider/AuthProvider';

const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='relative'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="absolute top-0 left-0 ">
                       <Link to={`/editabout/${user.email}`}> <button className="btn bg-teal-400 text-white  ">Edit</button></Link>
                    </div>
                <figure><img src={user.photoURL} alt="Album" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">Name: {user.displayName}</h2>
                    <p>{user.email}</p>
                    <p>{user.email}</p>
                    <div className="card-actions justify-end">
                       <Link to='/'><button  className="btn  bg-teal-400 text-white">Home</button></Link>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default About;