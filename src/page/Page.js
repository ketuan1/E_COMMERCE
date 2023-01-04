import FlashSale from "../layouts/flashSale/FlashSale";
import Home from "../layouts/home/Home";
import Shop from "../layouts/shop/Shop";
import Blogs from "../layouts/Blog/Blogs";

function Page({productItems, cartItem, addToCart, shopItems}) {
    return ( 
        <>
            <Home cartItem={cartItem} />
            <FlashSale productItems={productItems} addToCart={addToCart} />
            <Shop shopItems={shopItems} addToCart={addToCart} />
            <Blogs />             
        </>
     );
}

export default Page;