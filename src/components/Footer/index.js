import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const Footer =({ image, image1, image2, image3, image4, image5 }) => {
   return (
      <div className='footer'>

         <div className='footer-home-icon'>
            <img src={image} alt="home" width={25} height={25} />

         </div>
         <div className='footer-search-icon'>
            <img src={image1} alt="home" width={25} height={25} />

         </div>
         <div className='footer-circle-icon'>
            <img src={image2} alt="home" width={60} height={60} />
            <div className='footer-equipment-icon'>
               <img src={image3} alt="home" width={25} height={25} />

            </div>
         </div>
         <div className='footer-bill-icon'>
            <img src={image4} alt="home" width={25} height={25} />

         </div>
         <div className='footer-contact-icon'>
            <img src={image5} alt="home" width={25} height={25} />

         </div>
      </div>
   );
}

export default Footer
Footer.propTypes = {
   title: PropTypes.shape({}),
   image: PropTypes.func.isRequired,
};
