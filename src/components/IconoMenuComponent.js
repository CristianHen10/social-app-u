import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ApartmentIcon from '@material-ui/icons/Apartment';

export default function IconoMenuComponent({idMenu}) {
    if (idMenu === 1) {
        return <HomeIcon />;
    }
    if (idMenu === 2) {
        return <AccessibilityIcon />;
    }
    if (idMenu === 3) {
        return <ApartmentIcon />;
    }
    if (idMenu === 4) {
        return <HomeIcon />;
    }
}
