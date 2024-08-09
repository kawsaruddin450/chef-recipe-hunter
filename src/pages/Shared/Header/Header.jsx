import React, { useContext } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
        .then(result => {
            console.log("Signed Out");
        })
        .catch(error => {
            console.log(error.code);
        })
    }
    return (
        <div className='bg-green-400'>
            <div className="navbar lg:container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li><a>Blog</a></li>
                            <li><a>About Us</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">TteokBokki</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li><a>Blog</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <FaRegUserCircle className='text-4xl mr-4'></FaRegUserCircle>
                    {
                        user ?
                        <button className='btn btn-neutral' onClick={handleSignOut}>Log Out</button>
                        : <Link to='/login' className="btn btn-neutral">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;