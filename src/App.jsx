import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { useState , useEffect } from 'react';
import Home from './pages/home/Home'
import About from './pages/about/About';
import Academics from './pages/academics/Academics'
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Loading from './Loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // محاكاة تحميل بيانات لمدة 3 ثوانٍ
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loading  />;
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        {/* <Route path='/home' element = {<Home />} /> */}
        <Route path='/about' element = {<About />} />
        <Route path='/academics' element = {<Academics />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
