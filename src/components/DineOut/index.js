import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const DineOutCards = ({ image, image1, title, title2, title3, title4, title5, title6 }) => {
    return (
        <div className="DineOutCards" >
            <div className="dineout-img">
                <img src={image} alt="" width={300} height={450} />
            </div>
            <div className='dineout-title'>{title}</div>
            <div className='dineout-title2'>{title2}</div>
            <div className='dineout-title3'>{title3}</div>
            <div className='star-icon'>
                <img src={image1} alt="" width={20} height={20} />
            </div>
            <div className='dineout-title4'>{title4}</div>
            <div className='dineout-title5'>{title5}</div>
            <div className='dineout-title6'>{title6}</div>
        </div>


    );
}

export default DineOutCards
DineOutCards.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};