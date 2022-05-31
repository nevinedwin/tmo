
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { customeTheme } from './components';
import { DashBoard, Login, Signup } from './Modules';



function App() {

  return (
    <ThemeProvider theme={customeTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
