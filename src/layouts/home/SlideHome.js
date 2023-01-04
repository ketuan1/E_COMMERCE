import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DataHome from '../home/DataHome';

function SlideHome() {
  //slick => slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
        return <ul className='slide-home--slick'>{dots}</ul>
    },
};
    return ( 
        <>
            <Slider {...settings}>
           {
                DataHome.map((value, index) => {
                    return (
                        <div className='slide-home--box content__jflex' key={index}>
                            <div className='box__info'>
                                <h1 className='slide-home--title'>{value.title}</h1>
                                <p className='slide-home-desc'>{value.description}</p>
                                <button className='btn-primary btn-slide--home'>Access Cart</button>
                            </div>
                            <div className='box-img'>
                                <img className='slide-home-img' src={value.img} alt="" />
                            </div>
                        </div>
                    )
                })
                }
                </Slider>
        </>
     );
}

export default SlideHome;