import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default function GuiltfreeOption({ image,image2, image3, title, title1, title2, title3, title4, title5, title6,title7 }) {
  return (
    <div className='guiltfree-option'>
      <div className='guiltfree-option-image'>
        <img src={image} alt="card" width={140} height={180} />
      </div>
      <div className='heart-image'>
        <img src={image2} alt="card" width={20} height={20} />
      </div>
      <div className='Star-image'>
        <img src={image3} alt="card" width={20} height={20} />
      </div>
      <div className='guiltfree-option-offers'>{title}</div>
      <div className='guiltfree-option-offers'>{title1}</div>
      <div className='guiltfree-option-amount'>{title2}</div>
      <div className='guiltfree-option-title'>{title3}</div>
      <div className='guiltfree-option-title2'>{title4}</div>
      <div className='guiltfree-option-title3'>{title5}</div>
      <div className='guiltfree-option-title4'>{title6}</div>
      <div className='guiltfree-option-title5'>{title7}</div>
    </div>
  );
}

GuiltfreeOption.propTypes = {
  title: PropTypes.shape({}),
  image: PropTypes.func.isRequired,
};