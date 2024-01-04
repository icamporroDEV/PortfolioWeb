import styled from '@emotion/styled';
import { Button, Container, Typography } from '@mui/material';

export const PresentationContainer = styled(Container)({
 display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:'100px',
    color:'black',
  });

  export const StackContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',   
    color:'black',
    fontSize:'20px',
    fontWeight:'bold',
    marginTop:'45px',
  });
  export const ButtonContainer = styled(Container)({
  marginTop:'25px'
  });
  export const RoundButton = styled(Button)({
    borderRadius: '17px',
    backgroundColor: 'transparent',
    color: 'black',
    width: '110px',
    textTransform: 'inherit',
    border: '1px solid',
    marginLeft:'15px'
  });
  export const RoundButtonBlack = styled(Button)({
    borderRadius: '17px',
    backgroundColor: 'Black',
    color: 'white',
    width: '110px',
    textTransform: 'inherit',
    border: '1px solid',
    marginLeft:'15px'
  });


  export const TypoIntroduction = styled(Typography)({
   fontSize:'20px'
  });
  export const TypoTitle = styled(Typography)({
    fontSize:'35px',
    fontWeight:'bold'
   });
   export const TypoSubTitle = styled(Typography)({
    fontSize:'28px',
    fontWeight:'bold',
    color:'grey'
   });


  export const LargeRoundImage = styled.img`
  width: 400px; 
  height: 400px; 
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  filter: grayscale(90%);
`;

