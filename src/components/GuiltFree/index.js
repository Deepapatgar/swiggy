import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const GuiltFree = ({image, image2, title, title2, title3, title4 }) => {
    return (
        <div className="guiltfree-card" >
            <div className="guiltfree-icon">
                <img src={image} alt="" width={250} height={150} />
            </div>
            <div className="guiltfree-content">{title}</div>
            <div className="guiltfree-content2">{title2}</div>
            <div className="guiltfree-content3">{title3}</div>
            <div className="guiltfree-content4">{title4}</div>
            <div className="guiltfree-icon2">
                <img src={image2} alt="" width={24} height={24} />
            </div>
        </div>


    );
}

export default GuiltFree
GuiltFree.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};