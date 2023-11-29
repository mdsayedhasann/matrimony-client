import React from 'react';

const SectionHeading = ({heading, content}) => {
    return (
        <div className='flex justify-center items-center flex-col my-4'>
            <h2 className='text-3xl font-bold py-2'> {heading} </h2>
            <p> {content} </p>
        </div>
    );
};

export default SectionHeading;