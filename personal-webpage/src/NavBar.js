import { Typography } from '@mui/material';
import React from 'react';

import { MirrorContainer, NavBarButton, OptionsContainer, StyledAppbar, TypoTitle } from './NavBarComponents/styledNavbarComponents';




 const NavBar = () => {
  return (
    <section id='navbar' aria-label={'navbar'}>
      <StyledAppbar position='static' >
        <MirrorContainer>
            <TypoTitle >
              icamporroDEV
            </TypoTitle>
            <OptionsContainer disableGutters>
                <NavBarButton variant='body1'>
                    Home
                </NavBarButton>
                <NavBarButton variant='body1'>
                    About
                </NavBarButton>
                <NavBarButton variant='body1'>
                    Proyects
                </NavBarButton>
                <NavBarButton variant='body1'>
                    Contact
                </NavBarButton>
            </OptionsContainer>
           
        </MirrorContainer>
      </StyledAppbar>
    </section>
  );
};
export default NavBar;
