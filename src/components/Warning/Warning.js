import React from 'react';

const Warning = ({warning}) => {

    return (
        <div>
            <p className="text-center text-danger font-weight-bold">{warning}</p>
        </div>
    );
};

export default Warning;