import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const LoginPage = ({ title, image, image1, subtitle, image2, title1, title2, title3, title4, title5, title6, title7, image3, image4 }) => {
    return (
        <div className='loginpage'>
            <div className='loginpage-header'>
                {/* <div className='loginpage-header-time'>{title}</div>
                <div className='loginpage-header-wifi-icon'><img src={image} alt="network" width={20} height={15} /></div>
                <div className='loginpage-header-charge-icon'><img src={image1} alt="battery" width={25} height={25} /></div> */}
            </div>
            <div className='loginpage-name'>{subtitle}</div>
            <div className='loginpage-logo'><img src={image2} alt="cook" width={180} height={160} /></div>
            <div className='loginpage-mail-container'>{title1}</div>
            <div className='loginpage-container'>{title2}</div>
            <div className='loginpage-account'>{title3}
                <div className='loginpage-sign'>{title4}</div>
            </div>
            <div className='loginpage-option'>{title5}</div>
            <div className='loginpage-google'>
                <div className='loginpage-google-icon'><img src={image3} alt='google' width={25} height={25} /></div>
                <div className='loginpage-google-name'>{title6}</div>
            </div>
            <div className='loginpage-facebook'>
                <div className='loginpage-facebook-icon'><img src={image4} alt='google' width={25} height={25} /></div>
                <div className='loginpage-facebook-name'>{title7}</div>
            </div>
        </div>


    );
}

export default LoginPage
LoginPage.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};
