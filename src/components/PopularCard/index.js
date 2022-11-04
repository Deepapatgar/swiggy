import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const PopularCard = ({ image, title1, title2, }) => {
  return (
    <div className='popular-card'>
      <div className='popular-card-image'>
        <img src={image} alt="card" width={157} height={187} />

      </div>

      <div className='popular-card-offers'>{title1}</div>
      <div className='popular-card-amount'>{title2}</div>
    </div>
  );
}

export default PopularCard
PopularCard.propTypes = {
  title: PropTypes.shape({}),
  image: PropTypes.func.isRequired,
};
