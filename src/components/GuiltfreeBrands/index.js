import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default function GuiltfreeBrands({ image, image2, image3, title, title1, title2, title3, title4 }) {
    return (
        <div className='guiltfree-brands'>
            <div className='guiltfree-brands-image'>
                <img src={image} alt="card" width={160} height={200} />
            </div>
            <div className='Star-image1'>
                <img src={image2} alt="card" width={20} height={20} />
            </div>
            <div className='heart-image1'>
        <img src={image3} alt="card" width={20} height={20} />
      </div>
            <div className='guiltfree-brands-save'>{title}</div>
            <div className='guiltfree-brands-offers'>{title1}</div>
            <div className='guiltfree-brands-amount'>{title2}</div>
            <div className='guiltfree-brands-title'>{title3}</div>
            <div className='guiltfree-brands-reviews'>{title4}</div>
        </div>
    );
}

GuiltfreeBrands.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};