import '../product/Products.css';
import BannerShop from "../banner/BanerShop";
import ListProducts from "./ListProducts";
import ProductCart from './ProductCart';
import Loginer from '../../Login/Loginer';





function Products({listProductTop, listDetailsProducts, addToCart}) {
  

  return (
    <>
      <div className='background'>
        <div className='container'>
          <div className='banner--product'>
            <BannerShop />
          </div>
          <div className='slider__product'>          
           <ProductCart listProductTop={listProductTop} addToCart={addToCart} />
          </div>
          <ListProducts listDetailsProducts={listDetailsProducts} addToCart={addToCart} />
          
          {/* <Loginer /> */}
        </div>
      </div>
    </>
  );
}

export default Products;