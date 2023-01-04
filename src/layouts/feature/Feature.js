import '../feature/Feature.css';
import data from './DataFeature';

function Feature() {

  return (
    <>
      <div className="background">
        <div className="container">
        
            <div className="row">
              {
                data.map((value, index) => {
                  return (
                    <div className="col-12 col-sm-6 col-lg-3" key={index}>    
                        <div className="feature__info">
                        <div className='feature__icon'>
                          <i>{value.icon}</i>
                        </div>
                        <div className="feature__content">
                          <h4 className='feature__title'>{value.title}</h4>
                          <p className='feature__desc'>{value.decs}</p>
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

export default Feature;