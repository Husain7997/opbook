import React from 'react';
import { useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
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