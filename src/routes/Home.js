import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        boxOfficeResult: { dailyBoxOfficeList },
      },
    } = await axios.get(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=19485159ceea76711f74a90b7517d25c&targetDt=` +
        (getCurrentDate() - 1)
    );
    this.setState({ movies: dailyBoxOfficeList, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <body className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.rnum}
                rank={movie.rank} // 순위
                rankInten={movie.rankInten} // 순위 증감
                movieNm={movie.movieNm} // 제목
                rankOldAndNew={movie.rankOldAndNew} // 신규 진입 여부
                movieCd={movie.movieCd} // 영화 코드
                audiAcc={movie.audiAcc} // 관객 누적 수
              />
            ))}
          </div>
        )}
      </body>
    );
  }
}

export default Home;

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}
