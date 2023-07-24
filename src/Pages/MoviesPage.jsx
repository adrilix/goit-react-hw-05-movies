import { useState, useEffect } from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from "components/SearchBar/SearchBar";
import MoviesList from "components/MoviesList/MoviesList";
import LoadMoreButton from "components/LoadMoreButton/LoadMoreButton";
import { LoaderSpinner } from "components/Loader/Loader";

import api from "services/api";


function MoviesPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState(query || '');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line
    const [error, setError] = useState('');

    useEffect(() => {
        if (searchQuery) {
            getMovies()
        }
        // eslint-disable-next-line
    }, [searchQuery])

    const getMovies = async () => {
        setIsLoading(true);

        try {
            const results = await api.fetchMoviesBySearch(searchQuery, page);

            if (results.length === 0) {
                toast.info('Нічого не знайшлося за запитом 🙄', {
                    autoClose: 2000,
                });
                navigate('/movies');
                return;
            }

            setMovies(prev => [...prev, ...results]);
            setPage(prev => prev + 1);
            setIsLoading(true);

        } catch (error) {
            console.error('Щось відбулося не так із запитом до відеотеки. подробиці помилки тут :', error);
            setError(error.mesage);

        } finally {
            setIsLoading(false);
        }
    };

    const onChangeQuery = query => {
        setMovies([]);
        setSearchQuery(query);
        setPage(1);
        setError(null);

        navigate({
            ...location,
            search: `query=${query}`,
        });
    };


    return (
        <>
            <SearchBar onSearch={onChangeQuery}/>
            <MoviesList movies={movies}/>
            {movies.length > 0 && <LoadMoreButton onClick={getMovies}/>}
            {isLoading && <LoaderSpinner />}

            <ToastContainer position="top-right" theme="colored"/>
        
        </>
    )
}

export default MoviesPage;