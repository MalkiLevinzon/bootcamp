import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./Home";
import ImgList from './ImgList';
function App() {
  let navigate = useNavigate()

  return (
    <div className="App">
     <Home/> <Routes>
        <Route path='imgList' element={<ImgList />} > </Route>
        </Routes>
    </div>
  );
}

export default App;
