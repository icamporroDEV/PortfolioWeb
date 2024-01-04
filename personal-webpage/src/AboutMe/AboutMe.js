import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { RoundedBox, LargeSquareImage, MainGrid } from './AboutMeStyles';
import nachoPic from '../icons/nacho.jpg';
import { WorkspacePremium, AccountBalance } from '@mui/icons-material';
import { TypoIntroduction, TypoTitle } from '../Presentation/styledPresentation';

export const AboutMe = () => {
  return (
    <>
      <TypoIntroduction>More</TypoIntroduction>
      <TypoTitle>About Me</TypoTitle>
      <MainGrid container spacing={3}>
        <Grid item xs={6} container>
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <RoundedBox>
              <WorkspacePremium />
              <Typography variant="subtitle1">Experience</Typography>
              <Typography variant="body2">2+ Years in Frontend Development</Typography>
            </RoundedBox>
          </Grid>
          <Grid item xs={6}>
            <RoundedBox>
              <AccountBalance />
              <Typography variant="subtitle1">Education</Typography>
              <Typography variant="body2">
                Ingeniería en Sistemas UTN 2021-2023
              </Typography>
              <Typography variant="body2">
                Ingeniería en Informática Universidad Argentina de la Empresa 2024
              </Typography>
            </RoundedBox>
            </Grid>
            <Grid item xs={12}>
            <Container disableGutters>
            <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
            massa, varius a, semper congue, euismod non, mi.
          </Typography>
            </Container>
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>
          <LargeSquareImage src={nachoPic} />
        </Grid>
     
      </MainGrid>
    </>
  );
};

export default AboutMe;
