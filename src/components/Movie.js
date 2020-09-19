import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({
  rnum,
  movieCd,
  rank,
  rankInten,
  rankOldAndNew,
  movieNm,
  audiAcc,
}) {
  if (rankOldAndNew === "OLD") {
    rankOldAndNew = "";
  }
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${movieCd}`,
          state: {
            rank,
            rankInten,
            rankOldAndNew,
            movieCd,
            movieNm,
            audiAcc,
          },
        }}
      >
        <img
          src="https://i.pinimg.com/originals/c7/7e/48/c77e48de4ff26ab9e2aa53214044cf3a.jpg"
          alt={movieNm}
          title={movieNm}
        />
        <div className="movie__data">
          <h3 className="movie__title">{movieNm}</h3>
          <h4 className="movie__rank">영화 순위 : {rank}</h4>
          <div className="movie__rankud">
            <h5>순위 변동 : {rankInten}</h5>
            <h5 className="movie__rankon">{rankOldAndNew}</h5>
          </div>
          <h4 className="movie__audi">
            누적 관객 수 : {numberWithCommas(audiAcc)}명
          </h4>
        </div>
      </Link>
    </div>
  );
}
/*
Movie.propTypes = {
  rnum: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  rankInten: PropTypes.number.isRequired,
  movieCd: PropTypes.number.isRequired,
  movieNm: PropTypes.string.isRequired,
  rankOldAndNew: PropTypes.string.isRequired,
  audiAcc: PropTypes.number.isRequired,
};
*/

export default Movie;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
