import React from 'react';

import { MirrorContainer, NavBarButton, OptionsContainer, StyledAppbar, TypoTitle,AvatarImage, MirrorContainerClose, NameTitle, SubTitle } from './NavBarComponents/styledNavbarComponents';
import ProfilePic from './icons/NachoPic.jpg';
import { Container, Typography } from '@mui/material';
import { OutlineRoundButtonSalmon } from './Presentation/styledPresentation';



 const NavBar = () => {
  return (
    <div id='navbar' aria-label={'navbar'}>
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
                <OutlineRoundButtonSalmon variant='body1'>
                    A
                </OutlineRoundButtonSalmon>
                <OutlineRoundButtonSalmon variant='body1'>
                    B
                </OutlineRoundButtonSalmon>
                <OutlineRoundButtonSalmon variant='body1'>
                    C
                </OutlineRoundButtonSalmon>
           
            </OptionsContainer>
           
        </MirrorContainer>
      </StyledAppbar>
    </div>
  );
};
export default NavBar;
