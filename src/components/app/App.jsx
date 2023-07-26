import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoaderSpinner } from 'components/Loader/Loader';
import PageNotFound from 'Pages/PageNotFound';

// const HomePagePage = lazy(() => import('../../Pages/HomePagePage'));
const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('../../Pages/HomePage'));
const MoviesPage = lazy(() => import('../../Pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../Pages/MovieDetailsPage'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function App() {
  return (
    <div>
      <header>
        <nav>

  
        </nav>
      </header>
      <main>
        <Suspense fallback={<LoaderSpinner />}>
          {/* <Routes>
                  <Route path='/  ' element={<HomePagePage />} /> */}
          {/* <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} /> */}
          {/* <Route path="/movies" element={<MoviesPage />} /> */}
          {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          {/* </Route> */}
          {/* </Routes> */}

          <Routes>
              <Route path="/" element={<SharedLayout />}></Route>
              {/* <Route path="" element={<HomePage />} /> */}
              <Route index element={<HomePage />} /> 
              <Route path="movies" element={<MoviesPage />} />
              <Route path="movies/:query/:page" element={<MoviesPage />} />
              <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
