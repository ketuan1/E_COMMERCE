import '../about/About.css';
import about from '../about/image/about.jpg';
import BannerShop from '../banner/BanerShop';
import Feature from '../feature/Feature';

function About() {
    return (
        <>
            <div className="background">
                <div className="container">
                    
                    <div className='banner--about'>
                        <BannerShop />
                    </div>
                    <div>
                        <Feature />
                    </div>

                    <div className="main-about">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_img">
                                    <img className='about__img--child' src={about} alt="" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className='about__info'>
                                    <h2 className="about__header">We always bring the best products</h2>
                                    <p className='about__desc'>We are always looking for the best products to bring beauty,
                                        honoring the beauty of our customers is a condition we have to do.</p>

                                    <ul className='about__item'>
                                        <li>
                                            <i className="fa-solid fa-circle-check about__icon--check"></i>
                                            100% Customer Satisfaction
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check about__icon--check"></i>
                                            100% Customer Reviews
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check about__icon--check"></i>
                                            100% Customer Safety
                                        </li>
                                    </ul>
                                </div>
                                <div className="about__btn">
                                    <button className="btn btn-outline btn__about">Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <Contact /> */}

                </div>
            </div>
        </>
    );
}

export default About;