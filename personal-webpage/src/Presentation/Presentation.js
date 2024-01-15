import { Container } from '@mui/material'
import React from 'react'
import { TechStack } from './TechStack'
import { ButtonContainer,  HybridButton,  OutlineRoundButtonSalmon,Curva, PresentationContainer, RoundButton, RoundButtonBlack, RoundButtonSalmon, TypoIntroduction, TypoNameTitle, TypoSubTitle, TypoTitle } from './styledPresentation'

export const Presentation = () => {

  return (
    <>
   
        <PresentationContainer disableGutters>
        <Container disableGutters>
                <TypoIntroduction >Hello, i´m</TypoIntroduction>
                <TypoNameTitle >Ignacio Camporro</TypoNameTitle>
                <TypoSubTitle >Frontend Developer 🚀</TypoSubTitle>
                <ButtonContainer>
                    <RoundButtonSalmon>CV</RoundButtonSalmon>
                    <RoundButtonSalmon>GitHub</RoundButtonSalmon>
                </ButtonContainer>
                <TechStack/>
        </Container>
        </PresentationContainer>

    </>
  )
}
