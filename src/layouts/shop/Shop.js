import ShopCart from "./ShopCart";
import '../shop/style.css';

function Shop({shopItems, addToCart}) {
    return ( 
        <>
             <section className='shop background'>
                <div className='container content__jflex'>
                    <div className='contentWidth'>

                    <div className="heading content__jflex">
                            <div className="heading-left content__jflex">
                            <i className="fa fa-bolt product-icon"></i>    
                            <h1>Products</h1>
                            </div>
                        </div>
                        {/* product-content grid1 */}
                        <div className="product-content">
                            <ShopCart shopItems={shopItems} addToCart={addToCart}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Shop;