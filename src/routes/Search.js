import React from "react";
import axios from "axios";
import queryString from "query-string";
import Movie from "../components/Movie";
import "./NowPlaying.css";
import Searchbar from "../components/Searchbar.js";
import LoadingIcon from "../components/LoadingIcon";
class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  searchtext = queryString.parse(this.props.location.search).text;

  componentDidMount() {
    this.onSearchSubmit(this.searchtext);
  }

  onSearchSubmit = async (text) => {
    const {
      data: { results },
    } = await axios.get(
      `
        https://api.themoviedb.org/3/search/movie?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=1&include_adult=false`,
      { params: { query: text } }
    );
    this.setState({ movies: results, isLoading: false });
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <body className="container">
        <Searchbar onSubmit={this.onSearchSubmit} />
        {isLoading ? (
          <div>
            <h4 className="pleaseinput"> 검색어를 입력하세요.</h4>
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
  }
}

export default Search;

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}
