import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {useQuery} from 'react-apollo';
import {MOVIE_DETAILS} from './queries';

type TParams = {movieId: string};

const Detail = ({match}:RouteComponentProps<TParams>) => {
  const {loading, error, data} = useQuery(MOVIE_DETAILS,{
    variables: {
      movie_id: parseInt(match.params.movieId)
    }
  });

  if(loading) return <p>loading</p>
  if(error) return <p>error</p>

  const {movie} = data;
  const {suggestions} = data;

  console.log(movie);

  return (
    <div>
      {movie.title_long}
      {movie.medium_cover_image}
      {movie.rating}
      {movie.genres && movie.genres.map((genre: string) => {
        return <p key={genre}>{genre}</p>
      })}
      {movie.description_intro}
    </div>
  );
};

export default withRouter(Detail);