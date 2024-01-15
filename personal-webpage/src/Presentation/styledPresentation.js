import styled from '@emotion/styled';
import { Button, Container, Typography } from '@mui/material';

export const PresentationContainer = styled(Container)({
 display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:'100px',
    color:'black',
backgroundColor:'rgb(18,18,18)',
    borderRadius:'100% 0% 100% 0% / 0% 0% 100% 100%', height:'700px', minWidth:'100%'

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
  export const RoundButtonSalmon= styled(Button)({
    borderRadius: '17px',
    background: 'linear-gradient(to right, #FF8A80, #FFCDD2)', // Gradiente con tono salmón
    color: 'black',
    width: '110px',
    textTransform: 'capitalize',
    border: 'none',
    marginLeft: '15px',
    '&:hover': {
      background: 'linear-gradient(to right, #FF5252, #FF8A80)', // Cambio de color al pasar el mouse
    },
    '&:active': {
      transform: 'translateY(2px)',
    },
  });
  export const OutlineRoundButtonSalmon = styled(Button)({
    borderRadius: '17px',
    background: 'none', // Sin fondo de color en el interior del botón
    color: '#FF8A80', // Color de texto igual al tono salmón
    width: '110px',
    textTransform: 'capitalize',
    border: '2px solid transparent', // Borde inicialmente transparente
    marginLeft: '15px',
    transition: 'border 0.3s ease-in-out', // Agregar transición al borde
    '&:hover': {
      border: '2px solid #FF8A80', // Cambio de color del borde al pasar el mouse
    },
    '&:active': {
      transform: 'translateY(2px)',
    },
  });
 
  export const TypoIntroduction = styled(Typography)({
   fontSize:'20px',
   color:'white'
  });
  export const TypoTitle = styled(Typography)({
    fontSize:'45px',
    fontWeight:'bold',
    color:'rgb(18,18,18)'
   });
   export const TypoNameTitle = styled(Typography)({
    fontSize:'45px',
    fontWeight:'bold',
    color:'#E0E0E0'
   });
   export const TypoSubTitle = styled(Typography)({
    fontSize:'28px',
    fontWeight:'bold',
    color:'#FF725C'
   });


  export const LargeRoundImage = styled.img`
  width: 400px; 
  height: 400px; 
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  filter: grayscale(90%);
`;

