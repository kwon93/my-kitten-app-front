import React from 'react';
import Header from './Header.tsx';
import NavBar from './Navigation/NavBar.tsx';
import SearchBar from '../common/SearchBar.tsx';
import Banner from '../common/Banner.tsx';
import CategoryGrid from '../category/CategoryGrid.tsx';
import ImageCarousel from '../common/ImageCarousel.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../../features/member/SignUp.tsx';

const MainPage: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <div className="flex-grow flex-col max-w-md mx-auto w-full bg-white shadow-md">
          <Header />
          <main className="flex-grow flex flex-col overflow-y-auto mt-auto px-4 py-4 ">
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={
                <>
                  <SearchBar />
                  <Banner />
                  <CategoryGrid />
                  <ImageCarousel />
                </>
              } />
            </Routes>
          </main>
        </div>
        <NavBar />
      </div>
    </BrowserRouter>
  );
};

export default MainPage;