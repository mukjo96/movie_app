import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Todayrank from "./Todayrank";
import LoadingIcon from "../LoadingIcon";
import "./Boxoffice.css";

const TopRatedlist = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTopRatedlist = useCallback(async () => {
    try {
      let response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=1&region=KR`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (isLoading === true) {
      getTopRatedlist();
    }
    setIsLoading(false);
  }, [getTopRatedlist, setIsLoading, isLoading]);

  return (
    <body className="container">
      {isLoading ? (
        <div className="boxofficemovies">
          <div id="loading-icon">
            <LoadingIcon />
          </div>
        </div>
      ) : (
        <div className="boxofficemovies">
          <div className="boxofficemovie">
            <ul className="tboxofficelist">
              <li className="trank">순위</li>
              <li className="rankInten">평점</li>
              <li className="movieNm">영화 제목</li>
              <li className="audiAcc">평가 수</li>
            </ul>
          </div>
          <div>
            <hr />
          </div>
          {movies.slice(0, 10).map((movie) => (
            <div className="boxofficemovie">
              <Todayrank
                key={movie.id}
                rank={movies.indexOf(movie) + 1} // 순위
                rankInten={movie.vote_average} // 순위 증감
                movieNm={movie.title} // 제목
                audiAcc={movie.vote_count} // 관객 누적 수
              />
            </div>
          ))}
        </div>
      )}
    </body>
  );
};

export default TopRatedlist;

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}
