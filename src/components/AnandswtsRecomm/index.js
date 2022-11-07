import React from 'react';
import PropTypes from 'prop-types';
import "./index.css";


const AnandswtsRecomm = ({ title, image, title2, image2, title3, title4, title5, title6, title7,title8, image3 }) => {
    return (
        <div className="anandswts" >
            <div className='anandswts-title'>{title}</div>
            <div className="greenfood-icon">
                <img src={image} alt="" width={25} height={25} />
            </div>
            <div className='Star-image1'>
                <img src={image3} alt="card" width={20} height={20} />
            </div>
            <div className='anandswts-title2'>{title2}</div>
            <div className='anandswts-title3'>{title4}</div>
            <div className='anandswts-title4'>{title5}</div>
            <div className='anandswts-title5'>{title6}</div>
            <div className='anandsets-title6'>{title8}</div>
            <div className="box-header" >
                <div className="motichor-image">
                    <img src={image2} alt="" width={143} height={143} />
                </div>
                <div className="add-button" >{title3}</div>
                <div className="add-text" >{title7}</div>
            </div>
        </div>


    );
}

export default AnandswtsRecomm
AnandswtsRecomm.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};