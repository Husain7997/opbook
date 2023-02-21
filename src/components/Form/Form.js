import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
const Form = () => {
  
  const { register, handleSubmit } = useForm();
 
const onSubmit = data => {
 console.log(data);
    const image = data.file[0];
    
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=97bbdffbe02ad087ab42a9f608f2fa3b`
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(imgData => {
            if (imgData.success) {
                console.log(imgData.data.url);
                const post = {
                  postData: data.text,
                   
                    image: imgData.data.url
                }


             
                fetch('http://localhost:5000/posts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        
                    },
                    body: JSON.stringify(post)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast.success(`post is added successfully`);
                        // Navigate('/')
                    })
            }
        })
}





  // if (isLoading) return 'Loading...'
 

  return (
    <div className='card flex-shrink-0 w-full  shadow-2xl '>
      <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
        

        <input {...register("file")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
        <br/>
        <textarea {...register("text")} className="textarea textarea-secondery" placeholder="what's on Your Mind"></textarea>

        <div className=" mt-6">
          <button  type="submit" className="btn btn-primary bg-teal-400 ">Post</button>
        </div>
      </form>
     
    </div>
  );
};

export default Form;