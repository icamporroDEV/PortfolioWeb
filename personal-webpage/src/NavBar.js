import React from 'react';

import { MirrorContainer, NavBarButton, OptionsContainer, StyledAppbar, TypoTitle,AvatarImage, MirrorContainerClose, NameTitle, SubTitle } from './NavBarComponents/styledNavbarComponents';
import ProfilePic from './icons/NachoPic.jpg';
import { Container, Typography } from '@mui/material';



 const NavBar = () => {
  return (
    <section id='navbar' aria-label={'navbar'}>
      <StyledAppbar position='static' >
        <MirrorContainer>
            <MirrorContainerClose  >
            <AvatarImage src={ProfilePic} alt="Avatar" />
            <div disableGutters>
            <NameTitle>
              Ignacio Camporro
              </NameTitle>
              <SubTitle>
              Front End Developer
              </SubTitle>
            </div>           
            </MirrorContainerClose>
            <OptionsContainer >
                <NavBarButton variant='body1'>
                    A
                </NavBarButton>
                <NavBarButton variant='body1'>
                    B
                </NavBarButton>
                <NavBarButton variant='body1'>
                    C
                </NavBarButton>
           
            </OptionsContainer>
           
        </MirrorContainer>
      </StyledAppbar>
    </section>
  );
};
export default NavBar;
