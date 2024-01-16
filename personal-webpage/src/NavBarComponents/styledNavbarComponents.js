import styled from '@emotion/styled';
import { AppBar, Button, Container, Typography } from '@mui/material';


export const StyledAppbar = styled(AppBar)({
    backgroundColor: '#170449',
    // background-image: linear-gradient(0deg, #795879 0%, #170449 100%),
    color: 'white',
    padding: '5px 0px',
    fontSize: '20px',
    border: 'none',
    display:'flex',
    height:'50px',
    // position:'fixed',
    // zIndex:1
   
  });

  export const TypoTitle = styled(Typography)({
  fontSize:'20px',
  fontWeight:'bold'

  });
  export const NameTitle = styled(Typography)({
   fontSize:'14px',
   fontWeight:600,
 
  });
  export const SubTitle = styled(Typography)({
    fontSize:'11px',
    color:'rgb(124, 127, 130)'
   });
  export const MirrorContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',   
  });
  export const MirrorContainerClose = styled(Container)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',   
  });


  export const OptionsContainer = styled(Container)({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '50%',   
    
  });

  export const NavBarButton = styled(Button)({
    background: 'none',
  border: 'none',
  padding: 0,
  fontFamily: 'inherit',
  color: 'inherit',
  textdecoration: 'underline',
  cursor: 'pointer',
  fontSize: 'inherit',
  marginRight:'6px'
 
  });

  export const AvatarImage = styled.img`
  width: 40px; // ajusta el tamaño según sea necesario
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;