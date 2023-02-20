import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider/AuthProvider';



const Login = () => {
    const { logIn , googleSignIn} = useContext(AuthContext);
    // const [loginError, setLoginError] = useState('');
    // const location = useLocation();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token]=useToken(loginUserEmail);
//     const navigate = useNavigate();

// const from = location.state?.from.pathname || '/';
// // if (token) {
//     navigate(from, {replace:true})
// // }
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        // setLoginError('');
        console.log(data);
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(user.email)
                
            })
            .catch(err => {
                console.log(err)
                // setLoginError(err.message)
            })
    }

    const handleGoogleSignIn=()=>{
        const googleProvider= new GoogleAuthProvider();
        googleSignIn(googleProvider)
        .then(result=>{
            const user= result.user;
            console.log(user)
        })
        .catch(err=>{console.error(err)})}
    return (
        <div className="hero my-4">
            <div className="card  w-full max-w-sm shadow-2xl ">
                <h1 className="text-5xl font-bold text-center">Login</h1>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="card-body">

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
                            <input {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'password mustbe 6 charecter long' }
                            })} type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover" >Forgot password?</Link>
                            </label>
                        </div>
                        {/* <div>
                            {
                                loginError && <p className="text-red-600"> {loginError}</p>
                            }
                        </div> */}
                        <div className="form-control mt-6">
                            {/* {errors.email && <p className='text-red-600'>{errors?.email?.message}</p>}
                            {errors.password && <p className='text-red-600'>{errors?.password?.message}</p>} */}
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
                <p className="text-center m-3">New to Doctors Portal? <Link to='/register' className=' text-cyan-500'>Create new account</Link></p>

                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>

                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info m-3">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;