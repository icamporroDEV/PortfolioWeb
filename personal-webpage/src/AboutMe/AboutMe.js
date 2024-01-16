import React from 'react';
import { AboutMeContainer, CarrouselContainer } from './AboutMeStyles';
import {  TypoTitle } from '../Presentation/styledPresentation';

import MICA1 from './MICA1.jpg';
import MICA2 from './MICA2.jpg';
import MICA3 from './MICA3.jpg';
import ProyectCard from './ProyectCard';
export const AboutMe = () => {
  const images = [MICA1, MICA2, MICA3];
  return (
    <AboutMeContainer >
      <TypoTitle>Web Development</TypoTitle>

      <CarrouselContainer>
        {/* <ProyectTitle>mica.gob.ar</ProyectTitle> */}
        <ProyectCard image={MICA1} title={'MICA (Mercado de Industrias Culturales)'}/>
      {/* <Carrousel images={images}/> */}
      </CarrouselContainer>
 
    </AboutMeContainer>
  );
};

export default AboutMe;
