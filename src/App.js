import { Routes, Route } from 'react-router-dom';
import { AppFrame, FullFrame } from './App.style';
import HomePage from './Components/HomePage/HomePage';
import MovieViewer from './Components/MovieViewer/MovieViewer';
import Searcher from './Components/Searcher/Searcher';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { useState } from 'react';
import MovieLister from './Components/MovieLister/MovieLister';

function App() {
  const [searchedTitle, setSearchedTitle] = useState();

  return (
    <FullFrame>
      <AppFrame>
        <Searcher/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/MovieList/:searchedTitle' element={<MovieLister data={{searchedTitle,setSearchedTitle}}/>}/>
            <Route path='/MovieView/:searchedTitleId' element={<MovieViewer/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
      </AppFrame>
    </FullFrame>
  );
}

export default App;