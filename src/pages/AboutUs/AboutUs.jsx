import React from 'react';
import SectionHeading from '../../shared/SectionHeading/SectionHeading';

const AboutUs = () => {
    return (
        <div>
            <div className='bg-pink-50 py-36 flex flex-col justify-center items-center'>
                <SectionHeading heading={'About Us'}>

                </SectionHeading>
            </div>

            <div className='max-w-4xl mx-auto my-6'>
            <h1 className="text-3xl font-bold mb-4">Welcome to Your Matrimony Website Name, Connecting Hearts Since 2018!</h1>
    <p className="mb-6">
      At Your Matrimony Website Name, we are passionate about fostering meaningful connections and bringing hearts together in the journey of matrimony. Established in 2018, our platform has been a trusted companion in the pursuit of finding lifelong companionship.
    </p>
    
    <h2 className="text-2xl font-bold mb-2">Our Journey</h2>
    <p className="mb-4">
      Founded with a vision to create a space where individuals could find love, trust, and understanding, Your Matrimony Website Name began its journey with a commitment to help singles discover their perfect match. Over the years, we've evolved into a dynamic and inclusive community that celebrates diversity and cherishes the sanctity of marriage.
    </p>
    
    <h2 className="text-2xl font-bold mb-2">What Sets Us Apart</h2>
    <p className="mb-4">
      What makes us stand out is our dedication to ensuring a secure, user-friendly, and personalized experience for every member. We understand that finding a life partner is one of the most significant decisions in one's life. Therefore, we strive to provide a platform that is not just about profiles but also about compatibility, values, and shared aspirations.
    </p>
    
    {/* Continue with other sections using similar JSX structure */}
            </div>
        </div>
    );
};

export default AboutUs;