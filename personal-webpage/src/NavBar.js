import React from 'react';

import { MirrorContainer, NavBarButton, OptionsContainer, StyledAppbar, TypoTitle,AvatarImage, MirrorContainerClose, NameTitle, SubTitle } from './NavBarComponents/styledNavbarComponents';
import ProfilePic from './icons/NachoPic.jpg';
import { OutlineRoundButtonSalmon, RoundButton } from './Presentation/styledPresentation';



 const NavBar = () => {
  return (

      <StyledAppbar  disableGutters position='static' >
        <MirrorContainer disableGutters>
            <MirrorContainerClose  >
            <AvatarImage src={ProfilePic} alt="Avatar" />
            <div disableGutters>
            <NameTitle>
              {'{ IcamporroDev }'}
              </NameTitle>
       
            </div>           
            </MirrorContainerClose>
            <OptionsContainer >
                {/* <RoundButton variant='body1'>
                    A
                </RoundButton> */}
                {/* <OutlineRoundButtonSalmon variant='body1'>
                    B
                </OutlineRoundButtonSalmon>
               */}
           
            </OptionsContainer>
           
        </MirrorContainer>
      </StyledAppbar>

  );
};
export default NavBar;
