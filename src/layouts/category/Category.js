import '../category/Category.css';

const dataCategory = [
    {
        cateImg: './images/category/cat-2.png',
        name: 'Polo-Cotton',
    },
    {
        cateImg: './images/category/cat-2.png',
        name: 'Cap Baseball',
    },
    {
        cateImg: './images/category/cat-2.png',
        name: 'Caps Panama',
    }
];

function Category() {
    return (
        <>
            <div className="category">
                {
                    dataCategory.map((value, index) => {
                        return (
                            <div className='category__box content__dflex' key={index}>
                                <img className='category__img' src={value.cateImg} alt='' />
                                <span className='category__title'>{value.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Category;