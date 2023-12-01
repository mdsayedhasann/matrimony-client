import React from 'react';
import useBioData from '../../hooks/useBioData';
import SidebarCard from './SidebarCard';

const BioProfileSidebar = () => {
    const [bioData] = useBioData()
    return (
        <div>
            {
                bioData.map(bio => <SidebarCard key={bio._id} bio={bio}></SidebarCard> )
            }
        </div>
    );
};

export default BioProfileSidebar;