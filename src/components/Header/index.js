import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Header = ({ image,title1 ,title2,image1,title3,title4 ,title5})=> {
    return (
        <div className='header-card'>
   
  <div className='header-card-1'><img src={image} alt="biriyani" width={300} height={180}/></div>
  <div className='biriyani-name'>{title1}</div>
  <div className='biriyani-south-indian'>{title2}</div>
  <div className='star-box'><img src={image1} alt="star" width={13} height={13}/>3.8</div>
  <div className='biriyani-time'>{title3}</div>
  <div className='biriyani-amount'>{title4}</div>
  <div className='line'></div>
  <div className='biriyani-offer'>{title5}</div>
        </div>


    );
}

export default Header
Header.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};
