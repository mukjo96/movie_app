import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import axios from "axios";
import "./Home.css";
import Pagination from "rc-pagination";
import { Link } from "react-router-dom";
import "rc-pagination/assets/index.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(20);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopRated();
  }, [currentPage]);

  const getTopRated = async () => {
    let response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?sort_by=vote_average.desc&api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=${currentPage}&region=KR`
    );

    setMovies(response.data.results);
    setIsLoading(false);
    setTotalPage(response.data.total_results);
  };

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
          onChange={(page) => setCurrentPage(page)}
        />
      </div>

      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
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

export default Home;


