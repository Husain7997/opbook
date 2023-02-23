import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/ContextProvider/AuthProvider';



const EditAbout = () => {

  const aboutdata= useLoaderData()
  // console.log(productData)
  const {user}= useContext(AuthContext)
  
  const navigate = useNavigate();
  

  const handleEdit = (event)=>{
    event.preventDefault();
    const form= event.target;
    const name= form.name.value;
    const imgURL= form.imgURL.value;
    const email= form.email.value || 'UnRegistered';
   
    const textarea= form.textarea.value;
   
    const about={
      status:'booked',
      id:aboutdata._id,
      title:aboutdata.name,
      price:aboutdata.price,
      ctegory:aboutdata.category,
      name,
      imgURL,
      email,
    
      textarea
      
    }

//  if (Product?.status !== 'available') {
  fetch(`http://localhost:5000/users/${user.email}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(about)
  })
  .then(res=>res.json())
  .then(data=>{
    
    if (data.acknowledged) {
      form.reset();
      alert('Product Booked successfully')
        navigate('/')
      
    }
  })
  .catch(err=>console.log(err))
 }
// 


  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <div className="card-body">
          
        
            <form  onSubmit={handleEdit}  className="text-center mb-10" >
            
              <div className="card w-full ">
                <div className="card-body grid grid-cols-1 md:grid-cols-2">

                  <input type="text" name='name' defaultValue={user.displayName} placeholder="Name" className="input input-bordered" />
                  <input type="text" name='imgURL'  placeholder='your image URl' className="input input-bordered" />
                  <input type="text" name='email' defaultValue={user.email} placeholder="Your email address" className="input input-bordered" />
                  {/* <input type="text" name='university' defaultValue={aboutdata.university} placeholder="university" className="input input-bordered" />
                  <input type="text" name='address' defaultValue={aboutdata.address} placeholder="address" className="input input-bordered" /> */}
                  
                 
                </div>
              </div>
              <div className="indicator">
                <div className="indicator-item indicator-bottom">
                
                  <button button='submmit' className="btn btn-primary">Submit</button>
                
                </div>
                <div className="card border">
                  <div className="card-body">
                    <textarea name='textarea' required className="textarea textarea-primary" placeholder="description"></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAbout;