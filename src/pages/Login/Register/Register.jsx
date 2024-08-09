import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="name" name='name' id='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="email" name='email' id='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="password" name='password' id='password' className="input input-bordered" required />
                                <label className='label-text-alt'>
                                    Already have an account? <Link to='/login' className='text-green-300 link link-hover'>Login now</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-300 font-bold" type='submit'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;