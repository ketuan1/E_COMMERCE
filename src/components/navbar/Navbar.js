import { useState } from "react";
import { Link } from "react-router-dom";
import '../navbar/Navbar.css';

function Navbar() {
     // function MobileMenu Icon
    const [mobileMenu, setMobileMenu] = useState(false);
    return ( 
        <>
          <header className='navbar'>
                <div className='container content__jflex'>
                    <div className='navbar__category content__jflex'>
                        <span className='fa-solid fa-border-all navbar__category--icon-all'></span>

                        <h4 className='navbar__header'>Categories
                            <i className='fa fa-chevron-down navbar__category--icon-down'></i>
                        </h4>
                    </div>

                    <div className='navbar__link'>
                        
                        {/* function */}
                        <ul className={mobileMenu ? 'navbar__menu' : 'link content__dflex capitalize'}
                            onClick={() => setMobileMenu(false)}>
                            <li className='navbar__menu--link'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='navbar__menu--link'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='navbar__menu--link'>
                                <Link to='/products'>Shops</Link>
                            </li>                           
                            <li className='navbar__menu--link'>
                                <Link to='/blog'>Blogs</Link>
                            </li>
                            {/* <li className='navbar__menu--link'>
                                <Link to='/services'>Services</Link>
                            </li> */}
                            <li className='navbar__menu--link'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>

                        {/* function */}
                        <button className='' onClick={() => setMobileMenu(!mobileMenu)}>
                            {
                                mobileMenu ? <i className='fas fa-times close home-btn'></i>
                                    : <i className='fas fa-bars open icon__toggler--open'></i>
                            }
                        </button>
                    </div>
                </div>
                </header>
     </>
     );
}

export default Navbar;