
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {NavBar, ItemListContainer,} from './components'
import { Fragment } from 'react';
import { ItemCount} from './components/ItemCount';
import {Home} from './pages/Home'
import { Obras} from './pages/Obras';
import { Reconocimiento} from './pages/Reconocimiento'; 




export function App() {
    return ( 
    <Fragment> 
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/Home' element={<Home/>} />
                <Route path='/Obras' element={<Obras/>} />
                <Route path='/Reconocimiento' element={<Reconocimiento/>} />
            </Routes>
        </BrowserRouter>
        
        <ItemListContainer/>    
        <ItemCount/>
    </Fragment>
    );
}

export default App;