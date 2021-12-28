
import './App.css';
import {NavBar, ItemListContainer} from './components'
import { Fragment } from 'react';
import { SimpleList } from './components/SimpleList';
import { Counter } from './components/Counter';
import { ItemCount} from './components/ItemCount';

const listItems = ['juguetes', 'pavo']
function App() {
    return ( 
    <> 
        <NavBar/>
        <ItemListContainer/>   
        <SimpleList listItems={['juguetes', 'pavo']}/>
        <Counter/> 
        <ItemCount/>
    </>
    );
}

export default App;