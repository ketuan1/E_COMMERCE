import '../banner/BannerShop.css';
// import '../banner/image/bannerJs.jpg';

function BannerShop() {
    return ( 
        <>
            <div className='background'>
                <div className='container'>
                    <div className='banner'>
                        <div className='banner__content'>
                             {/* <img src={bannerJs} alt=''/> */}
                            <h4 className='banner__title'>Welcome to <span className='banner__title--span'>E</span>shop.</h4>
                            <h2 className='banner__heading'>shop Ecommerce Services</h2>
                            <button className='btn-primary btn__banner'>Browse Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default BannerShop;