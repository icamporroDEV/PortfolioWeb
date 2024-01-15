import React from 'react';
import { AboutMeContainer, CarrouselContainer,ProyectTitle } from './AboutMeStyles';
import {  TypoTitle } from '../Presentation/styledPresentation';
import { Typography } from '@mui/material';
import { Carrousel } from './Carrousel';
import MICA1 from './MICA1.jpg';
import MICA2 from './MICA2.jpg';
import MICA3 from './MICA3.jpg';
export const AboutMe = () => {
  const images = [MICA1, MICA2, MICA3];
  return (
    <AboutMeContainer disableGutters>
      <TypoTitle>Work</TypoTitle>
      <CarrouselContainer>
        <ProyectTitle>mica.gob.ar</ProyectTitle>
      <Carrousel images={images}/>
      </CarrouselContainer>
 
    </AboutMeContainer>
  );
};

export default AboutMe;
