import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './screens/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={lightTheme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>    
  </React.StrictMode>
)