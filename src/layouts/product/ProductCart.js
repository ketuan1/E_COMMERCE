import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className='slick--next' onClick={onClick}>
            <button className='button__slick'>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
        </div>
    )
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='slick--prev' onClick={onClick}>
            <button className='button__slick'>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}

function ProductCart({listProductTop, addToCart}) {
    const settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,

        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>

                {
                    listProductTop.map((listProductTop, index) => {
                        return (
                            <div className='slider__product--box' key={index}>
                                <div className='slider__product--info'>
                                    <img className='slider__product--img' src={listProductTop.img} alt={listProductTop.title} />
                                    <h2 className='slider__product--title'>{listProductTop.title}</h2>
                                    <p className='slider__product--price-new'>{listProductTop.price}$</p>
                                    <p className='slider__product--price-old'>{listProductTop.price_old}</p>

                                    <div className='overlay'>
                                        <button onClick={() => addToCart(listProductTop)}>
                                            <i className="fa-solid fa-cart-shopping overlay__icon--cart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    );
}

export default ProductCart;