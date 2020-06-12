import gql from "graphql-tag";

export const HOME_PAGE = gql`
query{
  movies(limit:50, rating:5){
    id,
    title,
    genres,
    rating,
    medium_cover_image,
  }
}  
`

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movie_id: Int!) {
    movie(movie_id:$movie_id){
      id
      title_long
      rating
      genres
      like_count
      description_intro
      language
    }
    suggestions(movie_id:$movie_id){
      id
      title
      rating
      language
      medium_cover_image
      genres
    }
  }
`

