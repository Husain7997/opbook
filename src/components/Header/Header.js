import React from 'react';
import img from '../../img/postpic3.JPG'

const Header = () => {
    return (
        <div width="100%"  className=" ">
            <div style={{height:"350px"}} className=" w-full  carousel rounded-box  ">
               
                <div className="carousel-item relative w-full relative ">
                    <img width="100%" className='z-0' height="400px" src={img} alt="Burger" />
                <div className="absolute top-0 left-0 "><button className="btn bg-buttonBg text-white z-10 ">Edit</button></div>
                </div>
                
            </div>



        </div>
    );
};

export default Header;