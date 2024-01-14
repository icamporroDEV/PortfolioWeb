import { Container } from '@mui/material';
import './App.css';
import  NavBar  from './NavBar';
import { Presentation } from './Presentation/Presentation';
import { AboutMe } from './AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
       <NavBar/>
      <header className="App-header">
      <Presentation/>
      </header>
      <div>
        <AboutMe/>
      </div>
    </div>
  );
}

export default App;
