import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import '../header/Header.css';

function Header({ cartItem }) {
     return (
          <>
               <div className='search--navbar'>
               <Search cartItem={cartItem} />
               <Navbar />
               </div>
              
          </>
     );
}

export default Header;