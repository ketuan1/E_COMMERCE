import Category from '../category/Category';
import SliderDefault from '../home/SlideDefault';
import '../home/HomeDefault.css';

function Home() {
    return ( 
        <>
             <section className='home'>
                <div className='container content__jflex home-category-side'>
                    <Category />
                    <SliderDefault />
                </div>
           </section>
        </>
     );
}

export default Home;