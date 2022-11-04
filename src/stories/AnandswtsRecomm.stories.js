import React from 'react';
import AnandswtsRecomm from '../components/AnandswtsRecomm';

import img1 from "./images/desserts.jpg";

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
    image: img1,
    title: 'Motichoor Laddu 250 Gram',
};

// export const anandswtsRecomm2 = Template.bind({});
// anandswtsRecomm2.args = {
//     image: img2,
//     title: 'aa'
// };