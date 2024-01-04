import styled from '@emotion/styled';
import { AppBar, Button, Container, Typography } from '@mui/material';


export const StyledAppbar = styled(AppBar)({
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 20px',
    fontSize: '20px',
    border: 'none',
    display:'flex'
   
  });

  export const TypoTitle = styled(Typography)({
  fontSize:'20px',
  fontWeight:'bold'
   
  });

  export const MirrorContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',   
  });

  export const OptionsContainer = styled(Container)({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',   
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
