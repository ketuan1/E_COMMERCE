import { useState } from "react";
import { Box, Checkbox, Rating } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

// heart
const label = { inputProps: { "aria-label": "Checkbox demo" } };

//icon start
const labels = {
    0.5: "",
    1: "",
    1.5: "",
    2: "",
    2.5: "",
    3: "",
    3.5: "",
    4: "",
    4.5: "",
    5: "",
  };
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
  

function ShopCart({ shopItems, addToCart }) {

    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    return (
        <>
            <div className="row">
            {shopItems.map((shopItems, index) => {
                return (
                    <div className="col-12 col-sm-6 col-lg-3" key={index} >
                    <div className="box">
                        <div className="product mtop">
                            <div className="img">
                                <span className="discount">{shopItems.discount}% Off</span>
                                <img src={shopItems.img} alt="" />
                                <div className="product-like">
                                    <label>0</label> <br />
                                         {/* <i className="fa-regular fa-heart"></i> */}
                                         <Checkbox
                                            {...label}
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite sx={{color: 'red'}} />}
                                        /> 
                                </div>
                            </div>

                            <div className="product-details">
                                {/* data */}
                                <h3>{shopItems.name}</h3>
                                <div className="rate">
                                    {/* <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i> */}
                                        
                                    <Box
                                            sx={{
                                            width: 200,
                                            display: "flex",
                                            alignItems: "center",
                                            }}
                                        >
                                            <Rating
                                            name="hover-feedback"
                                            value={value}
                                            precision={0.5}
                                            getLabelText={getLabelText}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                            onChangeActive={(event, newHover) => {
                                                setHover(newHover);
                                            }}
                                            emptyIcon={
                                                <StarIcon
                                                style={{ opacity: 0.55 }}
                                                fontSize="inherit"
                                                />
                                            }
                                            />
                                            {value !== null && (
                                            <Box sx={{ ml: 2 }}>
                                                {labels[hover !== -1 ? hover : value]}
                                            </Box>
                                            )}
                                        </Box>
                                </div>

                                <div className="price">
                                    {/* data */}
                                    <h4>{shopItems.price}.00</h4>
                                    <button onClick={() => addToCart(shopItems)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                  </div>
                );
            })}
            </div>
        </>
    );
}

export default ShopCart;