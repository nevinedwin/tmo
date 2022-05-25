
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sample from './components/sample';
import { SignUp } from './Modules';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
