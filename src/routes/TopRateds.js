import React, { useEffect, useState, useCallback } from "react";
import queryString from "query-string";
import Movie from "../components/Movie";
import axios from "axios";
import "./NowPlaying.css";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import LoadingIcon from "../components/LoadingIcon";

const TopRateds = ({ location, history }) => {
  const query = queryString.parse(location.search);
  const nowpage = parseInt(query.page);

  const [currentPage, setCurrentPage] = useState(nowpage || 1);
  const [totalPage, setTotalPage] = useState(20);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTopRated = useCallback(async () => {
    let response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=${currentPage}&region=KR`
    );

    setMovies(response.data.results);
    setIsLoading(false);
    setTotalPage(response.data.total_results);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(nowpage);
    getTopRated();
  }, [getTopRated, nowpage]);

  return (
    <body className="container">
      <div>
        <Pagination
          className="pagination"
          total={totalPage}
          current={currentPage}
          showPrevNextJumpers={true}
          style={{ marginTop: "2%" }}
          pageSize={20}
          onChange={(page) => {
            setCurrentPage(page);
            history.push(`/toprateds?page=${page}`);
          }}
        />
      </div>

      {isLoading ? (
        <div id="loading-icon">
          <LoadingIcon />
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              movie_id={movie.id}
              title_original={movie.original_title}
              summary={movie.overview}
              poster_path={movie.poster_path}
              title_kr={movie.title}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
              genre_ids={movie.genre_ids}
              release_date={movie.release_date}
            />
          ))}
        </div>
      )}
    </body>
  );
};

export default TopRateds;
