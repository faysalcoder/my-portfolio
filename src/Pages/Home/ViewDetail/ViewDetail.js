import React from 'react';
import { Route, useLocation, useParams } from 'react-router';

const ViewDetail = () => {
    const {title}=useParams();
    return (
        <div>
            {/* <p>{title}</p> */}
        </div>
    );
};

export default ViewDetail;