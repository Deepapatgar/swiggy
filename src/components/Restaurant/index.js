import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


const Restaurant =({ title, image, image1, image2, title1, title2, title3, title4, title5 })  =>{
   return (
      <div className='restaurant-card'>
         <div className='restaurant-image'>
            <img src={image} alt="card" width={123} height={109} />
         </div>

         <div className='restaurant-content-name'>{title}</div>
         <div className='restaurant-like-icon'>
            <img src={image2} alt="like" width={20} height={20} />
         </div>
         <div className='restaurant-star-icon'>
            <img src={image1} alt="card" width={20} height={20} />
         </div>
         <div className='restaurant-time'>{title1}</div>
         <div className='restaurant-address'>{title2}</div>
         <div className='box'>
            <div className='minus'>{title3}</div>
            <div className='number'>{title4}</div>
            <div className='plus'>{title5}</div>
         </div>
      </div>
   );
}
export default Restaurant
Restaurant.propTypes = {
   title: PropTypes.shape({}),
   image: PropTypes.func.isRequired,
};