import logo from './logo.svg';

import './App.css';
import 'bootstrap.min.css';
import 'bootstrap.bundle.min.js';
import {Routes, Route} from "react-router";
import Testnwcnt from './Testnwcnt';

function App() {
  

return (
   

<div className="App">

<Routes>

<Route path="/" Component={Testnwcnt}/>

</Routes>
</div> 

);


}





export default App;
