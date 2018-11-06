import React from 'react';
import './Header.css';
import moment from 'moment';

const LambdaTitle = () => {
    return (
        <div className="lambda-title">
            <h4>Lambda School</h4>
            <p className="handle">@LambdaSchool</p>
            <ul>
                <li>{moment().format("MMM Do YY")}</li>
            </ul>
        </div>
    );
}

export default LambdaTitle;