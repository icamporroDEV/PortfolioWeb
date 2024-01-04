import { Container } from '@mui/material'
import React from 'react'
import { TechStack } from './TechStack'
import { ButtonContainer, LargeRoundImage, PresentationContainer, RoundButton, RoundButtonBlack, TypoIntroduction, TypoSubTitle, TypoTitle } from './styledPresentation'
import ProfilePic from '../icons/NachoPic.jpg';
export const Presentation = () => {
  return (
    <>
    <Container>
        <PresentationContainer>
                <LargeRoundImage src={ProfilePic} alt='profilePic'/>
        <Container>
                <TypoIntroduction >Hello, i´m</TypoIntroduction>
                <TypoTitle >Ignacio Camporro</TypoTitle>
                <TypoSubTitle >Frontend Developer</TypoSubTitle>
                <ButtonContainer>
                    <RoundButton>CV</RoundButton>
                    <RoundButtonBlack>GitHub</RoundButtonBlack>
                </ButtonContainer>
                <TechStack/>
        </Container>
        </PresentationContainer>

    </Container>
    </>
  )
}
