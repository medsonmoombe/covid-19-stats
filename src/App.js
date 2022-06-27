import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsBody from './components/NewsBody';
import NewsList from './components/NewsList';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<NewsBody />} />
        <Route exact path="/" element={<NewsList />} />
      </Routes>
    </Router>
  );
}

export default App;
