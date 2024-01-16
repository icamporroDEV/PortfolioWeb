import styled from '@emotion/styled';
import { Button, Container, Typography, keyframes } from '@mui/material';

export const PresentationContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white', 
  minWidth: '100%',
  backgroundImage: 'linear-gradient(0deg, #795879 0%, #170449 100%)',
  width: '100%',
  height: '100vh',
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

  export const RoundButton= styled(Button)({
    borderRadius: '17px',
    background: 'transparent', // Gradiente con tono salmón
    color: 'white',
    width: '110px',
    textTransform: 'capitalize',
    border: '2px solid #ee609c',
    marginLeft: '15px',
    '&:hover': {
      background:'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)', // Cambio de color al pasar el mouse
    },
    '&:active': {
      transform: 'translateY(2px)',
    },
  });
  export const OutlineRoundButtonSalmon = styled(Button)({
    borderRadius: '17px',
    background: 'none', 
    color: '#FF8A80', 
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

  export const ArsatText = styled.span`
  background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  fontSize:'9vh',
  `;

  export const TypoIntroduction = styled(Typography)({
    fontSize:'2.5vh',
   color:'white',
   marginTop:'5px'
  });
  export const TypoTitle = styled(Typography)({
    fontSize:'30px',
    marginTop:'20px',
    fontWeight:'bold',
    textAlign:'center',
    color:'#ffffff'
   });
   export const SubtitleContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
 
   });
 
 
   export const TypoNameTitle = styled(Typography)({
    fontSize:'8vh',
    fontWeight:'bold',
    color:'white',
    letterSpacing: '2.2px',
    // textShadow: '1px 3px 11px rgba(0,0,0,.3)'
    '@media (max-width: 600px)': {
      fontSize:'15vw',
      textAlign:'justify',
      lineHeight:'auto'
    },
   });
   const typingAnimation = keyframes`
   from { width: 0 }
   to { width: 50% }
 `;
 
 const blinkCaretAnimation = keyframes`
   from, to { border-color: transparent }
   50% { border-color: white }
 `;
 
 export const TypoSubTitle = styled(Typography)`
 font-size: 6vh;
 font-weight: bold;
 background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
 color: transparent;
 -webkit-background-clip: text;
 background-clip: text;
 padding-right: 5px;
 overflow: hidden;
 border-right: .15em solid white;
 white-space: nowrap;
 letter-spacing: .15em;
 animation: ${typingAnimation} 3.5s steps(40, end), ${blinkCaretAnimation} .75s step-end infinite;

 ${'' /* Media Query */}
 @media (max-width: 600px) {
   font-size: 6vw;
   text-align: justify;
   line-height: auto;
   display: 
 }
`;



  export const LargeRoundImage = styled.img`
  width: 400px; 
  height: 400px; 
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  filter: grayscale(90%);
`;

