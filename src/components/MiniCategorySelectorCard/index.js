import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const MiniCategorySelectorCard = ({ title, image,title1,title2 ,title3,title4,title5,title6 })=> {
    return (
     
        <div className="mini-category-card" >
        <div className="mini-category-image">
            <img src={image} alt="" />
        </div>
        <div className='mini-category-content-names'>             
        <div className="mini-category-content-momos">{title}</div>
        <div className="mini-category-content-vegetarian">{title1}</div>
        <div className="mini-category-content-south-indian">{title2}</div>
        <div className="mini-category-content-south-indian">{title3}</div>
        <div className="mini-category-content-egg-roll">{title4}</div>
        <div className="mini-category-content-south-indian">{title5}</div>
        <div className="mini-category-content-south-indian">{title6}</div>
        </div>
    </div>

    );
}


export default MiniCategorySelectorCard
MiniCategorySelectorCard.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};
