import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const LunchCard = ({ title, image, title1 }) => {
    return (
        <div className='lunch'>
            <div className="lunch-card-image">
                <img src={image} alt="" width={225} height={128} />

                <div className="lunch-card-offers">{title}</div>
                <div className="lunch-card-amount">{title1}</div>
            </div>

        </div>
    );
}

export default LunchCard
LunchCard.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};


