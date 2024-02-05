import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Cars from './Pages/Cars';
import CarInfos from './Pages/CarInfos';
import Register from './Pages/Register';

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='cars' element={<Cars />} />
        <Route path='cars/:id' element={<CarInfos />} />
        <Route path='register' element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
