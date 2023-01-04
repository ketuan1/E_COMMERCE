import BannerShop from '../banner/BanerShop';
import '../contact/Contact.css';
import contact from '../contact/image/contacts.jpg';

function Contact() {

    return (
        <>
            <section className='background'>
                <div className='container'>              
                    <div className='banner--contact'>
                        <BannerShop />
                    </div>              
                    <div className='wrapper-contact'>
                    <div className='contact-info'>
                        <div className='row'>
                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='contact__icon'>
                                    <i className="fa-solid fa-location-dot contact__icon--all"></i>
                                    <div className='contact__content'>
                                        <p>
                                            <span>Address: </span>
                                            hiep binh phuoc, Tp.Thu Duc
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='contact__icon'>
                                <i className="fa-solid fa-phone contact__icon--all"></i>
                                    <div className='contact__content'>
                                        <p>
                                            <span>Phone: </span>
                                            + 1235 2355 98
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='contact__icon'>
                                <i className="fa-sharp fa-solid fa-paper-plane contact__icon--all"></i>
                                    <div className='contact__content'>
                                        <p>
                                            <span>Email: </span>
                                            Ketuan81@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='contact__icon'>
                                <i className="fa-solid fa-globe contact__icon--all"></i>
                                    <div className='contact__content'>
                                        <p>
                                            <span>Website: </span>
                                            locations
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className='row'>

                            <div className='col-12 col-sm-8 col-lg-8'>
                                <div className='form'>
                                    <form className='contact__form'>
                                        <h3 className='form-title'>Contact Us</h3>
                                        <div className='row'>
                                            <div className='col-12 col-sm-6 col-lg-6'>
                                                <div className='form-group'>
                                                    <label className='form__label'>Name</label>
                                                    <input type='text' className='form-control' placeholder='Name.....' />
                                                </div>
                                            </div>

                                            <div className='col-12 col-sm-6 col-lg-6'>
                                                <div className='form-group form-group--mail'>
                                                    <label className='form__label'>Email</label>
                                                    <input type='text' className='form-control' placeholder='Email......' />
                                                </div>
                                            </div>


                                            <div className='col-12 col-sm-12 col-lg-12'>
                                                <div className='form-group'>
                                                    <label className='form__label'>Subject</label>
                                                    <input type="text" className='form-control' placeholder='Subject.....' />
                                                </div>
                                            </div>


                                            <div className='col-12 col-sm-12 col-lg-12'>
                                                <div className='form-group'>
                                                    <label className='form__label'>Message</label>
                                                    <input type='text' rows={6} cols={50} className='form-control form-text' placeholder='Message....' />
                                                </div>
                                            </div>
                                            <div className='btn-contact'>
                                                <button className='btn btn-primary'>submit</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>


                            <div className='col-lg-4'>
                                <div className='contact-images'>
                                  <img className='contact__img' src={contact} alt='' /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;