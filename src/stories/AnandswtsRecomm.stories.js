import React from 'react';
import AnandswtsRecomm from '../components/AnandswtsRecomm';

import greenmark from "./images/greenmark.jpg";
import motichor from "./images/motichor.jpg";
import star from "./images/star.png";
import mysorepak from "./images/mysorpak.jpg";
import kajukatli from "./images/kajukatli.png"

export default {
    title: 'AnandswtsRecomm',
    component: AnandswtsRecomm,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <AnandswtsRecomm {...args} />;

export const anandswtsRecomm = Template.bind({});
anandswtsRecomm.args = {
    image: greenmark,
    title: 'Motichoor Laddu',
    title2:'250 Gram',
    image2: motichor,
    title3:'ADD',
    title4: '4.6',
    title5:'(587)',
    title6: 'Item Details',
    title7:'Customisable',
    image3: star,
    title8:'₹100'
};

export const anandswtsRecomm2 = Template.bind({});
anandswtsRecomm2.args = {
    image: greenmark,
    title: 'Mysore Pak',
    title2:'150 Gram',
    image2: mysorepak,
    title3:'ADD',
    title4: '4.1',
    title5:'(213)',
    title6: 'Item Details',
    title7:'Customisable',
    image3: star,
    title8:'₹200'
};
export const anandswtsRecomm3 = Template.bind({});
anandswtsRecomm3.args = {
    image: greenmark,
    title: 'Mysore Pak',
    title2:'250 Gram',
    image2: kajukatli,
    title3:'ADD',
    title4: '4.7',
    title5:'(374)',
    title6: 'Item Details',
    title7:'Customisable',
    image3: star,
    title8:'₹295'
};
