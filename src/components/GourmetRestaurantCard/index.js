import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const GourmetRestaurantCard = ({ title, image, title1, title2, title3, title4, image2 })=> {
    return (
        <div className='gourmet-restaurant-card'>
            
            <img src={image} alt="smoor" width={400} height={189} />

            <div className='gourmet-restaurant-offer'>{title}</div>
            <div className='gourmet-restaurant-smoor'>{title1}</div>
            <div className='gourmet-restaurant-smoor-dessert'>{title2}</div>
            <div className='gourmet-restaurant-smoor-koramangala'>{title3}</div>
            <div className='gourmet-restaurant-star-icon'><img src={image2} alt="star" width={16} height={16} /></div>
            <div className='gourmet-restaurant-smoor-amount'>{title4}</div>

        </div>


    );
}

export default GourmetRestaurantCard
GourmetRestaurantCard.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};

