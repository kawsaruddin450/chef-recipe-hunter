import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { user, logInUser, resetPass, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from);
            })
            .catch(error => {
                setError(error.code);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            navigate(from);
        })
        .catch(error => {
            setError(error.code);
        })
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            console.log(result.user);
            navigate(from);
        })
        .catch(error => {
            setError(error.code);
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <input type="email" placeholder="email" name='email' id='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="password" name='password' id='password' className="input input-bordered" required />
                                <label className='label-text-alt'>
                                    Don't have an account? <Link to='/register' className='text-green-300 link link-hover'>create now</Link>
                                </label>
                                <label className='label-text-alt text-red-700'>
                                    {error}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-300 font-bold" type='submit'>Login</button>
                            </div>
                            <h2 className='text-xl text-center'>Other Ways to login</h2>
                            <hr className='border-b-2 border-green-300' />
                            <div className="mt-6 flex text-center gap-6 mx-auto">
                                <button onClick={handleGoogleSignIn}><FaGoogle className='inline text-2xl text-green-300 hover:text-neutral'></FaGoogle> </button>
                                <button onClick={handleGithubSignIn}><FaGithub className='inline text-2xl text-green-300 hover:text-neutral'></FaGithub></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;