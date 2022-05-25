
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { customeTheme } from './components';
import { DashBoard, SignUp } from './Modules';



function App() {

  return (
    <ThemeProvider theme={customeTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
