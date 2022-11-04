import React from 'react';
import PropTypes from 'prop-types';
import './index.css';



export default function SpecializationCard({ title, image }) {
    return (
        <div className="specialization-card" >
            <div className="specialization-icon">
                <img src={image} alt="" />
            </div>
            <div className="specialization-content">{title}</div>
        </div>


    );
}

SpecializationCard.propTypes = {
    title: PropTypes.shape({}),
    image: PropTypes.func.isRequired,
};