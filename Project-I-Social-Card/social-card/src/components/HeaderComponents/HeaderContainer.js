import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const Headercontainer = () => {
    return (
        <div className="header">
            <ImageThumbnail/>
            <HeaderTitle/>
            <HeaderContent/>
        </div>
    );
};

export default Headercontainer;