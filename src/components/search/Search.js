import { Button } from '@mui/material';
import {useState } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import AuthContext from '../../store/auth-context';
import '../search/Search.css';


function Search({ cartItem }) {

    const [openMenu, setOpenMenu] = useState(false);
    const [openForm, setOpenForm] = useState(true);
    

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    function blurHandler() {
        setOpenForm(!openForm);
    }


    //context
    const ctx = React.useContext(AuthContext);

    //function
    // window.addEventListener('scroll', function () {
    //     const search = document.querySelector('.search');
    //     search.classList.toggle('active', window.scrollY > 100);
    // });

    return (
        <>
            <section className='search'>
                <div className='container content__flex'>
                    <div className='logo width'>
                        {/* logo */}
                        <a href='/'> <img src={logo} alt='logo' /></a>
                    </div>

                    <div className='search-box content__dflex'>
                        <i className='fa fa-search'></i>
                        <input type='text' placeholder='Search hear...' />                        

                        <span className='search__box-title'>All Categories</span>
                    </div>

                    <div className='icon__controller--search content__dflex width'>

                        {/* if value = true thì value đằng sau thực thi còn bằng false value đằng sau k thực thi */}                 

                        <div className='cart'>
                            {/* function cart */}
                            <Link to='/cart'>
                                <i className='fa fa-shopping-bag icon-circle'></i>
                                {/* data */}
                                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                            </Link>
                        </div>

                        {/* icon user */}

                        <div className='user__controller'>
                            <i className='fa fa-user icon__user' onClick={toggleMenu}></i>
                        </div>

                        {
                            openMenu ? (
                                <form onBlur={blurHandler} action='' className='login_form' >
                                    <p>My Account</p> 
                                    <p>Purchase order</p>
                                    <p>Purchase order products</p>
                                    {/* <p>forget your password <Link to='/'> click here</Link></p> */}
                                    <Button variant="outlined" color='secondary' onClick={ctx.onLogout}>Logout</Button>
                                </form>
                            ) : null
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;