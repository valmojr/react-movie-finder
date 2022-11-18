import { MovieButton, MovieDetails, MovieItemFrame, MoviePoster, MovieTitle, MovieYear } from "./MovieListener.style";
import { Link } from 'react-router-dom';
const MovieItem = (props) => {
    const { movie } = props;

    return (
      <MovieItemFrame>
        <MoviePoster src={movie?.Poster} alt=''/>
        <MovieDetails>
          <MovieTitle>{movie?.Title}</MovieTitle>
          <MovieYear>{movie?.Year}</MovieYear>
          <Link to={'/MovieView/'+movie?.imdbID}>
            <MovieButton>SEE MORE</MovieButton>
          </Link>
        </MovieDetails>
      </MovieItemFrame>
    );
}

export default MovieItem;