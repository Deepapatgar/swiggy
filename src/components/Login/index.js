import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Login = ({ title, image, title2, title3, title4, title5, title6, title7}) => {
    return (
        <div className='login'>
            <div className='loginpage-img'>
                <img src={image} alt="img" width={410} height={300} />
            </div>
            <div className='loginpage-account'>{title}</div>
            <div className='loginpage-account-subtitle'>{title2}</div>
            <div className='login-button'>{title3}</div>
            <div className='login-byclick'>{title4}</div>
            <div className='login-terms'>{title5}</div>
            <div className='login-and'>{title6}</div>
            <div className='login-privacy'>{title7}</div>
        </div>
    );
}

export default Login
Login.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};