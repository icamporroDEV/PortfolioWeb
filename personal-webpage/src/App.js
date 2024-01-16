import './App.css';
import  NavBar  from './NavBar';
import { Presentation } from './Presentation/Presentation';
import { AboutMe } from './AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <section className="App-header">
      <Presentation/>
      </section>
      <section>
        <AboutMe/>
      </section>
    </div>
  );
}

export default App;
