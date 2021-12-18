
import './App.css';

import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Obras from './components/Obras';

function App() {
    return ( 
    <div className = "App" > 
        <NavBar/>
        <Inicio/>
        <Obras/>
    </div>
    );
}

export default App;