import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
 <div className="App">
<div className="blur" style={{top:'-18%', right:'0'}}></div>
<div className="blur" style={{top:'36%', left:'-8rem'}}></div>
<RouterProvider router={routes}></RouterProvider>
      

 </div>
  );
}

export default App;
