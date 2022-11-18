import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const MovieViewer = () => {
    const { searchedTitleId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState(false);
    const [movieData, setMovieData] = useState({
        Title: 'não',
        Poster: null,
        Year: null,
        Genre: null,
        Director: null,
        Plot: null,
        imdbRating: null,
        Response: null
    });

    useEffect(() => {
        (async ()=>{
            try {
                const url = 'https://www.omdbapi.com/?apikey=e1b11e6c&i=' + searchedTitleId.toString();
                const res = await fetch(url);
                setMovieData(await res.json());
            } catch (error) {
                console.log('Erro while fetching: ' + error.message)
                seterror(true);
            } finally {
                setLoading(false);
            }
        })();
    }, [searchedTitleId]);

    if (loading) return <h1>Searching for {searchedTitleId}...</h1>
    if (error) return <h1>Error while retrieving this IMDB id: {searchedTitleId}</h1>
    if (movieData.Response === 'False') return <h1>Movie not found</h1>
    return <MovieDetails movie={movieData} />
}

export default MovieViewer;