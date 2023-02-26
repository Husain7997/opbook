import React from 'react';
import { Link } from 'react-router-dom';
import love from '../../../img/like.png';
import nolike from '../../../img/notlike.png';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// import Productdetails from '../Productdetails/Productdetails';


const Service = ({service}) => {
    const {_id, name,like, category, img, price}=service;
    const loveReact=like==='like'?
              <img src={love}></img>
             : <img src={nolike}></img>;
             const backendData=like==="like"?{like:"like"}:{like:"nolike"}
             console.log(backendData);
           const hendleReact = id => {
            fetch(`http://localhost:5000/posts/${_id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ backendData })
            })
            .then(response => response.JSON())
            .then
            (data=> {
              console.log(data);
            })
          };
            
              
    return (
        
        <div className="card card-compact w-64 bg-base-100 shadow-xl m-4">
      {/* <PhotoProvider toolbarRender={({ onScale, scale }) => {
      <div>
        <svg className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale + 1)} />
        <svg className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale - 1)} />
      </div>;
  }}>
      <PhotoView src={img}>
      <img src={img} alt="service" />
      </PhotoView>
    </PhotoProvider> */}
      
        
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 >Prize: {price} </h2>
          {/* <p>{category?.slice(0, 100)} ...</p> */}
          <div className="card-actions flex justify-between align-center">
          <button onClick={hendleReact}>{loveReact}</button>

            <Link to={`/productdetails/${_id}`}>
              <button  className="btn btn-primary">View Details</button>
              </Link>
          </div>
        </div>
        
      </div>
    );
};

export default Service;