import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import useBioData from '../../hooks/useBioData';
import TopBio from '../../pages/Home/TopBio/TopBio';

const HomePageBioDataSection = ({preview}) => {
    const [bioData] = useBioData()
    let data = bioData
    if(preview){
        data = bioData.slice(0,6)
    }
    return (
        <div>
            <SectionHeading heading={"Top Bio Data's"} content={'Take a look to our top prior clients Bios'}>

            </SectionHeading>

            <div className='grid grid-cols-1 md:grid-cols-3'>
                {data.map(bio => <TopBio key={bio._id} bio={bio}></TopBio> )}
            </div>
        </div>
    );
};

export default HomePageBioDataSection;