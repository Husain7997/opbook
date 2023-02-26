import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/ContextProvider/AuthProvider';
// import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';
// import UseToken from '../../Components/hooks/useToken';


const Register = () => {
    const { createUser,user, updateUser, googleSignIn } = useContext(AuthContext);
    // const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = UseToken(createdUserEmail);
    // if (token) {
        navigate('/')
    // }
    const handleRegister = data => {
        // setRegisterError('');
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUser(data.name, data.email)
                Toaster('user create Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                
                updateUser(userInfo)
                    .then(() => {
                       
                    })
                    .catch(err => {
                        console.log(err)
                    });


            })
            .catch(err => {
                console.error(err);
                // setRegisterError(err.message)
            })
    }
    const saveUser = (name, email) => {
        const user = { name, email };
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email)
            });
    }

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken);
                  
    //             }
    //         })

    // }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => { console.error(err) })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center text-3xl font-bold mt-4">Sign Up</h1>

                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: "Email Address is required" })} type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: "Password is required" })} type="password" placeholder="password" className="input input-bordered" />

                            </div>
                            {/* <div>
                                {
                                    registerError && <p className="text-red-600"> {registerError}</p>
                                }
                            </div> */}
                            <div className="form-control mt-6">
                                {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </form>


                    <p className="text-center my-3">All Ready Have An Account? <Link to='/login' className=' text-cyan-500'>Login</Link></p>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info m-3">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;