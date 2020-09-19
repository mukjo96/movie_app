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
    const details = await axios.get(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=19485159ceea76711f74a90b7517d25c&movieCd=` +
        location.state.movieCd
    );
    console.log(details);

    this.setState({
      details: details.data.movieInfoResult.movieInfo,
      isLoading: false,
    });
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
              //key={detail.movieCd}
              movieNm={details.movieNm} // 순위
              movieNmEn={details.movieNmEn} // 순위 증감
              prdtYear={details.prdtYear} // 제목
              showTm={details.showTm} // 신규 진입 여부
              nations={details.nations[0].nationNm} // 영화 코드
              genres={details.genres} // 관객 누적 수
              directors={details.directors}
              actors={details.actors}
              watchGradeNm={details.audits[0].watchGradeNm}
            />
          </div>
        )}
      </section>
    );
  }
}

export default Detail;
