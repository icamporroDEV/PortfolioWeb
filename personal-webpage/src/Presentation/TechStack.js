import { Container, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as ReactIcon } from '../icons/react-logo.svg'; 
import { ReactComponent as HTML5Icon } from '../icons/html5Icon.svg'; 
import { ReactComponent as CSSIcon } from '../icons/css.svg'; 
import { ReactComponent as JSIcon } from '../icons/JS.svg'; 
import { StackContainer } from './styledPresentation';
export const TechStack = () => {
  return (
    <Container>
    <StackContainer disableGutters>
        <Typography color='white'variant='h8'>TechStack</Typography>
        <ReactIcon width="35" height="35" />
        <HTML5Icon width="35" height="35" />
        <CSSIcon width="35" height="35" />
        <JSIcon width="35" height="35" />
    </StackContainer>
    </Container>
  
  )
}
