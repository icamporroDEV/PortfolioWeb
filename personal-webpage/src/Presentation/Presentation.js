import { Container } from '@mui/material'
import React from 'react'
import { ArsatText, ButtonContainer,    PresentationContainer,  RoundButton,    SubtitleContainer, TypoIntroduction, TypoNameTitle, TypoSubTitle } from './styledPresentation'

export const Presentation = () => {

  return (
    <>
   
        <PresentationContainer >
        <Container >
                {/* <TypoIntroduction >Hello, i´m</TypoIntroduction> */}
                <TypoNameTitle >Ignacio Camporro</TypoNameTitle>
                <SubtitleContainer disableGutters>
                <TypoSubTitle >Frontend Developer at <ArsatText>ARSAT </ArsatText></TypoSubTitle>
                <span>🚀</span>
                </SubtitleContainer>
               
                 <TypoIntroduction>{'Building responsive and accesible sites for the web.'}</TypoIntroduction> 
                <ButtonContainer disableGutters>
                    <RoundButton>CV</RoundButton>
                    <RoundButton>GitHub</RoundButton>
                </ButtonContainer>
        </Container>
        </PresentationContainer>

    </>
  )
}
