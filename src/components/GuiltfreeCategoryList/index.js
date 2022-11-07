import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const GuiltfreeCategoryList = ({ image, title, title2 })=> {
    return (
     
        <div className="guiltfree-categorylist" >
        <div className="guiltfree-categorylist-image">
            <img src={image} alt="" />
        </div>
        <div className='guiltfree-categorylist-names'>             
        <div className="guiltfree-categorylist-title">{title}</div>
        <div className="guiltfree-categorylist-title2">{title2}</div>
        </div>
    </div>

    );
}


export default GuiltfreeCategoryList
GuiltfreeCategoryList.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};