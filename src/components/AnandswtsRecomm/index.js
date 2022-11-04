import React from 'react';
import PropTypes from 'prop-types';
import "./index.css";


const AnandswtsRecomm = ({title,image }) => {
    return (
        <div className="anandswts" >
            <div className='a'>{title}</div>
        </div>


    );
}

export default AnandswtsRecomm
AnandswtsRecomm.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};