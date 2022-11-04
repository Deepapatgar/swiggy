import React from 'react';
import PropTypes from 'prop-types';
import './index.css';



const HotDealCard =({ title, image,title1,title2,title3,title4 ,image1})=> {
    return (
       <div className='hot-deal-card'>
         <div className='hot-deal-card-chicken-icon'><img src={image1} alt="img" width={180} height={180}/></div>
        <div className='hot-deal-card-offer-icon'>                   
       <img src={image} alt="img" width={110} height={110}/>
      <div className='hot-deal-card-offer'>{title}</div>
       </div>
    
        <div className='hot-deal-card-chicken-name'>{title1}</div>
        <div className='hot-deal-card-chicken-specification'>{title2}</div>
        <div className='hot-deal-card-chicken-weight'>{title3}</div>
       </div>


    );
}

export default HotDealCard
HotDealCard.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};