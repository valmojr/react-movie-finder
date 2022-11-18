import { MovieDetailsFrame, MovieDetailsPlot, MovieDetailsPlotFrame, MovieDetailsGenre , MovieDetailsPoster, MovieDetailsSmallFrame, MovieDetailsTitle } from "./MovieDetails.style";

const MovieDetails = props => {
    return (
        <MovieDetailsFrame>
            <MovieDetailsTitle>{props.movie.Title}</MovieDetailsTitle>
            <MovieDetailsSmallFrame>
                <MovieDetailsPoster src={props.movie.Poster} alt='' />
                <MovieDetailsPlotFrame>
                    <MovieDetailsPlot>{props.movie.Plot}</MovieDetailsPlot>
                    <MovieDetailsGenre>Director: {props.movie.Director}</MovieDetailsGenre>
                    <MovieDetailsGenre>Genre: {props.movie.Genre}</MovieDetailsGenre>
                    <MovieDetailsGenre>Rating: {props.movie.imdbRating}/10</MovieDetailsGenre>
                </MovieDetailsPlotFrame>
            </MovieDetailsSmallFrame>
        </MovieDetailsFrame>
    );
}

export default MovieDetails;