import { Container } from '@mui/material'
import React from 'react'
import { TechStack } from './TechStack'
import { ButtonContainer,  PresentationContainer, RoundButton, RoundButtonBlack, TypoIntroduction, TypoSubTitle, TypoTitle } from './styledPresentation'

export const Presentation = () => {
  return (
    <>
    <Container>
        <PresentationContainer>
           
        <Container>
                <TypoIntroduction >Hello, i´m</TypoIntroduction>
                <TypoTitle >Ignacio Camporro</TypoTitle>
                <TypoSubTitle >Frontend Developer</TypoSubTitle>
                <ButtonContainer>
                    <RoundButtonBlack>CV</RoundButtonBlack>
                    <RoundButtonBlack>GitHub</RoundButtonBlack>
                </ButtonContainer>
                <TechStack/>
        </Container>
        </PresentationContainer>

    </Container>
    </>
  )
}
