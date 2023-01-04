function ListProducts({listDetailsProducts, addToCart}) {
    return (
        <>
            <div className="list__products">
                <div className="heading content__jflex">
                    <div className="heading-left content__jflex">
                        <i className="fa fa-bolt product-icon"></i>
                        <h2>My Shop</h2>
                    </div>
                </div>
                <div className="list__all--products">
                    <div className="row">
                        {
                            listDetailsProducts.map((listDetailsProducts, index) => {
                                return (
                                    <div className="col-12 col-sm-6 col-lg-3" key={index} >
                                        <div className="box__list--products" >
                                            <div className="list__products--info">
                                                <div className="list__products--img">                                                 
                                                    <img className="list__products--img" src={listDetailsProducts.img} alt="" />                                               
                                                </div>

                                                <div className="list__products--details">                                       
                                                    <h3 className="list__products--header">{listDetailsProducts.name}</h3>
                                                    <div className="list__products--icons">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>

                                                    <div className="list_products--price">                                           
                                                        <h4>{listDetailsProducts.price}$</h4>                                                      
                                                    </div>
                                                    <div>
                                  <button className="btn btn-outline btn-list--products" onClick={() => addToCart(listDetailsProducts)}>
                                                            show now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListProducts;