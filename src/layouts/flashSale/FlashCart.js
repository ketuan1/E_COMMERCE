import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
            <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
            <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FlashCart({ productItems, addToCart }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

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
                productItems.map((productItems, index) => {
                    return (
                        <div className='box' key={index}>
                            <div className='product mtop'>
                                <div className='img info__flash'>
                                    <span className='discount'>{productItems.discount}%Off</span>
                                    <img className='img__flash--cart' src={productItems.img} alt='' />
                                    <div className='product-like'>
                                        <div>
                                            <label>0</label>
                                        </div>
                                        {/* <i className="fa-regular fa-heart"></i> */}
                                        <Checkbox
                                            {...label}
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite sx={{color: 'red'}} />}
                                        /> 
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{productItems.name}</h3>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className='price'>
                                        <h4>{productItems.price}.00</h4>
                                        <button onClick={()=> addToCart(productItems)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
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

export default FlashCart;