import FlashCart from "./FlashCart";
import '../flashSale/FlashDefault.css';

function FlashSale({ productItems, addToCart }) {
    return ( 
        <>
            <section className='flash background'>
                <div className='container'>
                    <div className='heading content__dflex'>
                    <i className="fa fa-bolt"></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <FlashCart productItems={productItems} addToCart={addToCart} />
                </div>
       </section>
        </>
     );
}

export default FlashSale;