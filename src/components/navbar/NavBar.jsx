import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <main>
                <nav>
                    <div className="nav">
                    <div className='sectionOne'>
                        <div className="logo">
                            <img src="./images/woman1.avif" alt="logo" />
                        </div>
                        <div className="name">
                            <span className='s1'>She Share</span>
                            <span className='s2'>Vacation Rentals</span>
                        </div>
                    </div>
                    <div className='sectionTwo'>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="#">Services</Link>
                        <Link className='link' to="#">About</Link>
                        <Link className='link' to="#">Contact Us</Link>
                    </div>
                    <div className='sectionThree'>
                        <button>Register</button>
                        <button>LogIn</button>
                    </div>
                    </div>
                </nav>
            </main>
        </>
    )
}

export default NavBar;
