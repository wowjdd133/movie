import React from 'react';
import {Link} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import {HOME_PAGE} from './queries';
import styled from "styled-components";

interface ImageProps {
  url: string;
}

interface Movie {
  id: number;
  medium_cover_image: string;
  title: string;
  rating: string;
  genres: [string];
}

const Image = styled.div`
  background: url(${(props:ImageProps) => props.url});
  background-size: cover;
  width: 200px;
  height: 300px;
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: center;
  width: 80%;
`

const HomeContent = styled.div`
  width: 100%;
  height: 20%;
`

const MovieBox = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`

const MovieTextBox = styled.div`
  display: block;
`

const Home = () => {
  const {loading, error, data} = useQuery(HOME_PAGE);
  if(loading) return <span>loading</span>
  if(error) return <span>error</span>
  
  console.log(data);
  return (
    <HomeContainer>
      <HomeContent>
      {data.movies.map((movie:Movie) => {
        return (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <MovieBox>
            <Image url={movie.medium_cover_image}/>
          <MovieTextBox>
            <h1>{movie.title}</h1>
            {movie.genres != null && movie.genres.map((genre) => {
              return <p key={genre}>{genre}</p>
            })}
            <p>{movie.rating}</p>
          </MovieTextBox>
        </MovieBox>
        </Link>
        )
      })}
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;