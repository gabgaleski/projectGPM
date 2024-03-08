import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Cars from './Pages/Cars';
import CarInfos from './Pages/CarInfos';
import Register from './Pages/Register';
import './App.scss';
import Login from './Pages/Login';
import { useCallback, useContext, useEffect } from 'react';
import { InfosContext } from './context/Context';
import { requestData, setToken } from './services/requests';

function App() {
  const { setUserInfo } = useContext(InfosContext)

  const requestUser = useCallback(async() => {
    try {
        const response = await requestData('/users')
        return setUserInfo(response.data)
    } catch (error) {
        localStorage.removeItem("token")
    }
}, [setUserInfo])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token)
      requestUser()
    }
  }, [setUserInfo, requestUser])

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='profile' element={<Profile />} />
        <Route path='cars' element={<Cars />} />
        <Route path='cars/:id' element={<CarInfos />} />
        <Route path='register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
