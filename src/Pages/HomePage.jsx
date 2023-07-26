
import { useState, useEffect } from "react";
import api from "services/api";

import { LoaderSpinner } from "components/Loader/Loader";
import  MoviesList  from "components/MoviesList/MoviesList";
import Message from "components/Message/Message";

const HomePage = () => {
    const[trends, setTrends] = useState ([]);
    const[isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const[error,setError] = useState('');

    useEffect(()=>{

        const fetchData = async() => {
            try{
                setIsLoading(true); 
                const movies = await api.fetchTrends();
                setTrends(movies);
                console.log(movies);
            } catch (error) {
                console.error('Щось відбулося не так із запитом до відеотеки. подробиці помилки тут :', error);
                setError(error.mesage);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData()
    }, []);

   

    return(
        <main>
            <h1
            style={{
                textAlign: 'center',
                color: 'greenlight',
                fontSize: '32px',
                textShadow: '1px 0 1px black',
            }}>
                Тренди сьогодення
            </h1>
                {trends ? (
                <MoviesList movies = {trends} />)
                : (
                    <Message>
                        <h2>
                            сервіс трендофільмів тимчасово втрачено. спробуйте, будь ласка, пізніше
                        </h2>
                    </Message>)
            }
            
            {isLoading&&<LoaderSpinner />}
        </main>
    )
}

export default HomePage;
