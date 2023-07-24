import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import MovieNavigation from 'components/MovieNavigation/MovieNavigation';
import { LoaderSpinner } from 'components/Loader/Loader';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import api from 'services/api';

function MovieDetailsPage() {
    const [movieInfo, setMovieInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line
    const [error, setError] = useState(null);
    const location = useLocation;

    const OnGoBack = location.state?.from ?? '/';

    const { movieId } = useParams();

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const result = await api.fetchMovieById(movieId);
            setMovieInfo(result);
        } catch (error) {
            console.error(
                'Щось відбулося не так із запитом до відеотеки. подробиці помилки тут :',
                error
            );
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <GoBackButton to={OnGoBack} />
            {movieInfo && <MovieDetails movieInfo={movieInfo} />}
            {movieInfo && <MovieNavigation />}
            {isLoading && <LoaderSpinner />}

            <Outlet />
        </>
    );
}

export default MovieDetailsPage;
