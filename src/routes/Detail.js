import axios from "axios";
import React from "react";
import MovieDetail from "../components/MovieDetail";

class Detail extends React.Component {
  state = {
    details: {},
    isLoading: true,
  };

  getMovieDetails = async () => {
    const { location } = this.props;
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        location.state.movie_id +
        "?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR"
    );
    this.setState({ details: data, isLoading: false });
  };

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    } else {
      this.getMovieDetails();
    }
  }

  render() {
    const { isLoading, details } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="details">
            <MovieDetail
              key={details.id}
              title={details.title} // 순위
              original_title={details.original_title} // 순위 증감
              release_date={details.release_date} // 제목
              poster_path={details.poster_path}
              runtime={details.runtime} // 신규 진입 여부
              genres={details.genres}
              production_countries={details.production_countries} // 영화 코드
              vote_average={details.vote_average} // 관객 누적 수
              vote_count={details.vote_count}
              production_companies={details.production_companies}
              overview={details.overview}
              homepage={details.homepage}
            />
          </div>
        )}
      </section>
    );
  }
}

export default Detail;
