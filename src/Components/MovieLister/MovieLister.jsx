import { useParams } from "react-router"
import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import { MovieListStyle } from './MovieListener.style.js';
const MovieLister = () => {
    const { searchedTitle } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState(false);
    const [movieSearch, setmovieSearch] = useState();

    useEffect(() => {
        (async ()=>{
            try {
                const url = 'https://www.omdbapi.com/?apikey=e1b11e6c&s=' + searchedTitle.toString();
                const res = await fetch(url);
                setmovieSearch(await res.json());
            } catch (error) {
                console.log('Erro while fetching: ' + error.message)
                seterror(true);
            } finally {
                setLoading(false);
            }
        })();
    }, [searchedTitle]);

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error while searching for {searchedTitle}</h1>
    if (movieSearch.Response === 'False') return <h1>Nothing Found</h1>
    return(
        <MovieListStyle>
            {movieSearch?.Search.map((movie, index) => {return(
                <MovieItem movie={movie} key={index}/>
            )})}
        </MovieListStyle>
    );
}

export default MovieLister;