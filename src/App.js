import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './Routes/Router.js/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
 <div className="App">
<div className="blur" style={{top:'-18%', right:'0'}}></div>
<div className="blur" style={{top:'36%', left:'-8rem'}}></div>
<RouterProvider router={router}>
  
<Toaster />  
</RouterProvider>

 </div>
  );
}

export default App;
