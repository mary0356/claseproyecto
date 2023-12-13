import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from './components/navigation/Navbar';
import { Inicio } from './components/pages/Inicio';
import { centro1 } from './components/pages/centro1';
import { centro2 } from './components/pages/centro2';
import { centro3 } from './components/pages/centro3';
import { centro4 } from './components/pages/centro4';
import { centro5 } from './components/pages/centro5';
import { centro6 } from './components/pages/centro6';
import { Formulario } from './components/pages/Formulario';
import { Conclusion } from './components/pages/Conclusion';
import { Creditos } from './components/pages/Creditos';

function App() {
  return (
    <header className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/src/components/pages/Inicio.js' exact Component={Inicio}/>
            <Route path='/centro1.js' exact Component={centro1}/>
            <Route path='/centro2.js' exact Component={centro2}/>
            <Route path='/centro3.js' exact Component={centro3}/>
            <Route path='/centro4.js' exact Component={centro4}/>
            <Route path='/centro5.js' exact Component={centro5}/>
            <Route path='/centro6.js' exact Component={centro6}/>
            <Route path='/Formulario.js' exact Component={Formulario}/>
            <Route path='/Conclusion.js' exact Component={Conclusion}/>
            <Route path='/Creditos.js' exact Component={Creditos}/>
            
        </Routes>
      </Router>
    </header>
    
  );
}
export default App;
