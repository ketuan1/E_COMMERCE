import SlideHome from '../home/SlideHome';
function SlideDefault() {
    return ( 
        <>
             <section className='home-slide content__home--slider'>
                <div className='container'>
                    <SlideHome />
                </div>
            </section>
        </>
     );
}

export default SlideDefault;