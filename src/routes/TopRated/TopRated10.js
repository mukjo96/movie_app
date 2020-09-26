import React from "react";
import axios from "axios";
import Movie from "../../components/Movie";
import "../Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
class TopRated10 extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=10&region=KR`
    );
    this.setState({ movies: results, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <body className="container">
        <nav className="PageNavigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#/toprated/1">
                <FontAwesomeIcon icon={faArrowCircleLeft} />
              </a>{" "}
            </li>
            <li className="page-item">
              <a className="page-link" href="#/toprated/6">
                6
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#/toprated/7">
                7
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#/toprated/8">
                8
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#/toprated/9">
                9
              </a>
            </li>
            <li className="page-item">
              <a className="page-linkh" href="#/toprated/10">
                10
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#/toprated/10">
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </a>{" "}
            </li>
          </ul>
        </nav>
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
  }
}

export default TopRated10;
