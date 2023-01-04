import '../footer/Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='footer'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div className='footer__info'>
                                    <h2 className='footer__title'>Eshop <span>.</span></h2>
                                    <p className='footer__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam
                                        duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>

                                    <div className='app'>
                                        <div className='footer__app'>
                                            <i className='fa-brands fa-google-play'></i>
                                            <span className='footer__app--span'>Google Play</span>
                                        </div>
    
                                        <div className='footer__app'>
                                            <i className='fa-brands fa-app-store-ios'></i>
                                            <span  className='footer__app--span'>App Store</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-3'>
                                <div className='footer__box'>
                                    <h2 className='footer__header'>About Us</h2>
                                    <ul>
                                        <li>Careers</li>
                                        <li>Our Stores</li>
                                        <li>Our Cares</li>
                                        <li>Terms & Conditions</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='col-lg-3'>
                                <div className='footer__box'>
                                    <h2 className='footer__header'>Customer Care</h2>
                                    <ul>
                                        <li>Help Center </li>
                                        <li>How to Buy </li>
                                        <li>Track Your Order </li>
                                        <li>Corporate & Bulk Purchasing </li>
                                        <li>Returns & Refunds </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='col-lg-3'>
                                <div className='footer__box'>
                                    <h2 className='footer__header'>Contact Us</h2>
                                    <ul>
                                        <li>Tp thu duc HCM CiTy</li>
                                        <li>Email: ketuan81@gmail.com</li>
                                        <li>Phone: 033433971</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;