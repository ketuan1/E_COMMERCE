import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from './page/Page';
import Header from './components/header/Header';
import dataShop from './layouts/shop/DataShop';
import dataFlash from './layouts/flashSale/DataFlashSale';
import dataProductTop from './layouts/product/data';
import Cart from './components/cart/Cart';
import { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';
import Products from './layouts/product/Products';
import dataListProducts from './layouts/product/dataListProducts';
import AuthContext from './store/auth-context';
import LoginForm from './Login/LoginForm';
import About from './layouts/about/About';
import Blogs from './layouts/Blog/Blogs';
import Contact from './layouts/contact/Contact';


function App() {

  //data of flash sale
  const { productItems } = dataFlash;
  //data of shop
  const { shopItems } = dataShop;
  //data of product
  const { listProductTop } = dataProductTop;
  //data of list products
  const {listDetailsProducts } = dataListProducts;

  const [cartItem, setCartItem] = useState([]);

 //function addToCart
 const addToCart = (product) => {
  const productExit = cartItem.find((item) => item.id === product.id);

  if (productExit) {
    setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)));
  } else {
    setCartItem([...cartItem,{...product, qty: 1 }]);
  }
}

//function decreaseQty(remove cart item)
const decreaseQty = (product) => {
  const productExit = cartItem.find((item) => item.id === product.id);

  if (productExit.qty === 1) {
    setCartItem(cartItem.filter((item) => item.id !== product.id));
  } else {
    setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)));
  }
}
  
  //aptechBasic
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    //getItem để lấy phần tử ra
    if (localStorage.getItem('isLoggedInStatus') === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (username, password) => {
    console.log(`login with username: ${username} and password: ${password}`);

    if (username === 'admin' && password === '123123') {
      setIsLoggedIn(true);
      //setItem save localStorage
      //truyền vào 2 tham số(key, value)
      localStorage.setItem('isLoggedInStatus', '1');
    } else {
      alert('please login username and password');
    }
  }

  const logoutHandler = () => {
    //remove localStorage
    localStorage.removeItem('isLoggedInStatus');
    setIsLoggedIn(false);
    console.log('logout');
  }


  return (
    <>
      <AuthContext.Provider value={{ storeIsLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
        {isLoggedIn && <Router onLogin={loginHandler}>
          <Header cartItem={cartItem} />
          
          <Switch>
            <Route path="/" exact>
              <Page productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
            </Route>

            <Route path="/about" exact>
              <About  />
            </Route>
            
            <Route path="/products" exact>
              <Products addToCart={addToCart} listProductTop={listProductTop} listDetailsProducts={listDetailsProducts} />
            </Route>

            <Route path="/blog" exact>
              <Blogs  />
            </Route>

              <Route path="/contact" exact>
              <Contact  />
            </Route>  

            <Route path="/cart" exact>
              <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
            </Route>
            
          </Switch>
          <Footer />
        </Router>}
        {/* chua login thi chua into page home */}
        {!isLoggedIn && <LoginForm onLogin={loginHandler} />}
        </AuthContext.Provider>
    </>
  );
}

export default App;
