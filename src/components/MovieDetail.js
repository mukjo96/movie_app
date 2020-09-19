import React from "react";
import "./MovieDetail.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieDetail({
  movieNm,
  movieNmEn,
  prdtYear,
  showTm,
  nations,
  genres,
  directors,
  actors,
  watchGradeNm,
}) {
  return (
    <body className="movieDetail">
      <div className="movieDetail__data">
        <div className="movieDetail__title">
          <h1>{movieNm}</h1>
          <h4>{movieNmEn}</h4>
        </div>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre.genreNm}
            </li>
          ))}
        </ul>
        <div className="movieDetail__details">
          <h4 className="movieDetail__prdtYear">개봉년도 : {prdtYear}</h4>
          <h5>상영시간 : {showTm}분</h5>
          <h5>제작국가 : {nations}</h5>
          <h5>관람등급 : {watchGradeNm}</h5>
        </div>
        <ul className="movie__directors">
          <li>감독 : </li>
          {directors.map((director, index) => (
            <li key={index} className="directors__director">
              {director.peopleNm}
            </li>
          ))}
        </ul>
        <ul className="movie__actors">
          <li>주연 : </li>
          {actors.map((actor, index) => (
            <li key={index} className="actors__actor">
              {index < 3 ? actor.peopleNm : ""}
            </li>
          ))}
        </ul>
      </div>
    </body>
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

export default MovieDetail;
