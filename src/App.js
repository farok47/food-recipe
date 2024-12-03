import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Details from './pages/details/Details';
import Favorites from './pages/favorites/Favorites';
import Home from './pages/home/Home';


function App() {
  return (
  <div>
    <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
      
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/favorites' element={<Favorites/>}/>
  <Route path='/recipe-item/:id' element={<Details/>}/>
  <Route path="favorites/recipe-item/:id" element={<Details/>}/>
</Routes>
    </div>
  </div>
  );
}

export default App;
