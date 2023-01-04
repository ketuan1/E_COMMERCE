import '../cart/Cart.css';

function Cart({ cartItem, addToCart, decreaseQty }) {
  // calucate total price of items
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <section className="cart-items">
        <div className="container content__jflex cart-customer">

          
            <div className="cart-details">

              {/* function */}
              {cartItem.length === 0 && <h1 className="no-items product">No items are add cart</h1>}

              {
                cartItem.map((item, index) => {

                  {/* price * quantity */ }
                  const productQty = item.price * item.qty;

                  return (
                    
                      <div className="cart-list product content__jflex" key={index}>
                        <div className="cart__img">
                          {/* data */}
                          <img className='cart__img--child' src={item.img} alt="" />
                        </div>
                        <div className="cart-info">
                          {/* data */}
                          <h4 className="cart__name">{item.name}</h4>
                          {/* data */}
                          <h4 className="cart__price">
                            {item.price + '$'} * {item.qty}
                            <span className="cart__qty">${productQty}</span>
                          </h4>
                        </div>
                        {/* remove cart */}
                        <div className="cart-items-function">
                          {/* <div className="removeCart">
                      <button>
                         <i className="fa -solid fa-xmark"></i> 
                      </button>
                    </div> */}
                          <div className="cart__control content__jflex">
                            {/* button add */}
                            <button className="cart__plus" onClick={() => addToCart(item)}>
                              <i className="fa fa-plus"></i>
                            </button>
                            {/*button  minus */}
                            <button className="cart__minus" onClick={() => decreaseQty(item)}>
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                        </div>
                        {/* <div className="cart-item-price"></div> */}
                      </div>
                   
                  );
                })
              }

          </div>
          
           
              <div className="cart-total product">
                <h2 className='cart__summary-title'>Cart Summary</h2>
                <div className="content__jflex">
                  <h4 className='cart__summary--total-title'>Total Price :</h4>
                  <h4 className='cart__summary--total-price'>${totalPrice}</h4>
                </div>
              </div>
            </div>
          
       
      </section>
    </>
  );
}

export default Cart;