import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";

export const LargeSquareImage = styled.img`
width: 400px;
height: 400px; 
border-radius: 10px;
object-fit: cover;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
filter: grayscale(90%);
`;

export const SmallIcon = styled.img`
// width: 400px;
// height: 400px; 
border-radius: 10px;
object-fit: cover;

`;
export const RoundedBox = styled(Box)({
    borderRadius:"30px", 
    boxShadow:2, 
    bgcolor:"background.paper",
    height:'120px',
    width:'300px',
    padding:'10px',
    border:'1px solid black'
  });
  export const AboutMeContainer = styled(Container)({
    backgroundColor: 'rgb(18,18,18)'
  });
  export const CarrouselContainer = styled(Container)({
marginTop:'50px'  });

export const ProyectTitle = styled(Typography)({
  color:'white',
marginBottom:'25px' });
  export const MainGrid = styled(Grid)({
        marginTop:'50px',
        marginBottom:'50px',
  });

  export const AboutMeInfoContainer = styled(Container)({
    marginTop:'50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',   
  });

  export const TypoTitleAboutMe = styled(Typography)({
    fontSize:'20px',
    fontWeight:'bold'
   });
   export const TypoSubTitleAboutMe = styled(Typography)({
    fontSize:'15px',
    fontWeight:'bold',
    color:'grey'
   });
