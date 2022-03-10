import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import PostDetail from './components/Home/Posts/Post/PostDetail/PostDetail';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';
import EditPost from './components/Home/Posts/EditPost/EditPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={< Register />} />
          <Route path='/profile' element={< Profile />} />
          <Route path='/post/:_id' element={< PostDetail />} />
          <Route path='/post/editPost/:_id' element={< EditPost/>} />
          <Route path='/search/:title' element={<Search/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App