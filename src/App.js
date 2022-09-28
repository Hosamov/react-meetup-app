import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' exact element={<AllMeetupsPage />} />
          <Route path='/new-meetup' exact element={<NewMeetupPage />} />
          <Route path='/favorites' exact element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
