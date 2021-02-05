import React from 'react';

const pageInfo = ({pageInfo}) => {
    return (
        <>
            <h2>{pageInfo.title}</h2>
            <p>{pageInfo.content}</p>
        </>
    )
};

export default pageInfo;