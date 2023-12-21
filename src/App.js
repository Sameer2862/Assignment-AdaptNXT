import Sidenav from "./Components/Sidenav";
import React from "react";
import {Routes,Route,BrowserRouter} from 'react-router-dom'; 
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory";
import Order from "./Pages/Orders";
import Shipping from './Pages/Shipping';
import Channel from './Pages/Channel';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Dashboard/>}/>
        <Route path="/inventory" exact element={<Inventory/>}/>
        <Route path="/order" exact element={<Order/>}/>
        <Route path="/shipping" exact element={<Shipping/>}/>
        <Route path="/channel" exact element={<Channel/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
