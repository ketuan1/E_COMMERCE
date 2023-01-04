import { useState } from 'react';
import useCollapse from 'react-collapsed';
import BannerShop from '../banner/BanerShop';
import '../Blog/Blogs.css';
import Feature from '../feature/Feature';

const data = [
    {
        id: 1,
        img: './images/blog/blog1.jpg',
        title: 'Man’s Fashion Winter Sale',
        description: 'Maboriosam in a nesciung eget magnae dapibus disting tloctio in the find it pereri odiy maboriosm',
        show: 'Maboriosam in a nesciung eget magnae dapibus disting tloctio',
    },
    {
        id: 2,
        img: './images/blog/blog3.jpeg',
        title: 'Man’s Fashion Winter Sale',
        description: 'Maboriosam in a nesciung eget magnae dapibus disting tloctio in the find it pereri odiy maboriosm',
        show: 'Maboriosam in a nesciung eget magnae dapibus disting',
    },
    {
        id: 3,
        img: './images/blog/blog2.jpg',
        title: 'Man’s Fashion Winter Sale',
        description: 'Maboriosam in a nesciung eget magnae dapibus disting tloctio in the find it pereri odiy maboriosm',
        show: 'Maboriosam in a nesciung eget magnae dapibus disting',
    }
]

function Blogs() {

    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <>
            <section className='background'>
                <div className='container'>

                    <div className='banner--blogs'>
                        <BannerShop />
                    </div>
                    <div>
                        <Feature />
                    </div>
                    <div className='blog_header'>
                        <i className="fa fa-bolt icon__header--blog"></i>
                        <h1>Blogs</h1>
                    </div>
                    <div className='blog'>
                        <div className='row'>
                            {
                                data.map((value, index) => {
                                    return (
                                        <div className='col-12 col-sm-6 col-lg-4' key={index}>
                                            <div className='blog__info'>
                                                <img className='blog__img' src={value.img} alt='' />
                                                <h4 className='blog__title'>{value.title}</h4>
                                                <p className='blog__desc'>{value.description}</p>
                                                <p {...getCollapseProps()}>{value.show}</p>

                                                <button className='btn btn-primary btn__blog' {...getToggleProps({
                                                    onClick: () => setExpanded((prevExpanded) => !prevExpanded)
                                                })}
                                                >
                                                    {isExpanded ? 'Read Less' : 'Read More'}
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* <Contact /> */}
                </div>
            </section>
        </>
    );
}

export default Blogs;